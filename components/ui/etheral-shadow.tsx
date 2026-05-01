'use client';

import React, { useRef, useId, useEffect, CSSProperties } from 'react';
import { animate, useMotionValue, AnimationPlaybackControls } from 'framer-motion';

interface AnimationConfig {
    preview?: boolean;
    scale: number;
    speed: number;
}

interface NoiseConfig {
    opacity: number;
    scale: number;
}

interface ShadowOverlayProps {
    sizing?: 'fill' | 'stretch';
    color?: string;
    animation?: AnimationConfig;
    noise?: NoiseConfig;
    style?: CSSProperties;
    className?: string;
}

function mapRange(value: number, fromLow: number, fromHigh: number, toLow: number, toHigh: number): number {
    if (fromLow === fromHigh) return toLow;
    return toLow + ((value - fromLow) / (fromHigh - fromLow)) * (toHigh - toLow);
}

export function Component({
    color = 'rgba(128, 128, 128, 1)',
    animation,
    noise,
    style,
    className
}: ShadowOverlayProps) {
    const rawId = useId();
    const filterId = `eso-${rawId.replace(/:/g, '')}`;

    const animationEnabled = !!(animation && animation.scale > 0);
    const feColorMatrixRef = useRef<SVGFEColorMatrixElement>(null);
    const hueRotateMotionValue = useMotionValue(0);
    const animationRef = useRef<AnimationPlaybackControls | null>(null);

    const displacementScale = animation ? mapRange(animation.scale, 1, 100, 15, 80) : 0;
    // speed: 1 = slow (20s cycle), speed: 100 = fast (2s cycle)
    const cycleDuration = animation ? mapRange(animation.speed, 1, 100, 20, 2) : 10;

    useEffect(() => {
        if (!animationEnabled || !feColorMatrixRef.current) return;

        if (animationRef.current) animationRef.current.stop();

        hueRotateMotionValue.set(0);
        animationRef.current = animate(hueRotateMotionValue, 360, {
            duration: cycleDuration,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            onUpdate: (v) => {
                feColorMatrixRef.current?.setAttribute('values', String(v));
            },
        });

        return () => { animationRef.current?.stop(); };
    }, [animationEnabled, cycleDuration, hueRotateMotionValue]);

    return (
        <div
            className={className}
            style={{ overflow: 'hidden', position: 'relative', width: '100%', height: '100%', ...style }}
        >
            {/* SVG filter defs — sibling of (not inside) the filtered div */}
            {animationEnabled && (
                <svg
                    aria-hidden="true"
                    style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
                >
                    <defs>
                        <filter
                            id={filterId}
                            x="-40%"
                            y="-40%"
                            width="180%"
                            height="180%"
                            colorInterpolationFilters="sRGB"
                        >
                            <feTurbulence
                                type="turbulence"
                                baseFrequency={`${mapRange(animation!.scale, 0, 100, 0.003, 0.008)},${mapRange(animation!.scale, 0, 100, 0.006, 0.014)}`}
                                numOctaves="3"
                                seed="2"
                                result="noise"
                            />
                            {/* Animated hue rotation drives the displacement change over time */}
                            <feColorMatrix
                                ref={feColorMatrixRef}
                                in="noise"
                                type="hueRotate"
                                values="0"
                                result="rotatedNoise"
                            />
                            {/* Amplify channels so displacement is strong enough to see */}
                            <feColorMatrix
                                in="rotatedNoise"
                                type="matrix"
                                values="3 0 0 0 0  0 3 0 0 0  0 0 3 0 0  0 0 0 1 0"
                                result="amplifiedNoise"
                            />
                            <feDisplacementMap
                                in="SourceGraphic"
                                in2="amplifiedNoise"
                                scale={displacementScale}
                                xChannelSelector="R"
                                yChannelSelector="G"
                                result="output"
                            />
                        </filter>
                    </defs>
                </svg>
            )}

            {/* Filtered content — expanded by displacementScale to prevent edge clipping */}
            <div
                style={{
                    position: 'absolute',
                    inset: -displacementScale,
                    filter: animationEnabled ? `url(#${filterId}) blur(6px)` : 'blur(40px)',
                }}
            >
                {/* Blob shape via CSS gradient — no external image dependency */}
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        background: `
                            radial-gradient(ellipse 70% 55% at 45% 50%, ${color} 0%, transparent 70%),
                            radial-gradient(ellipse 50% 45% at 60% 55%, ${color} 0%, transparent 65%)
                        `,
                    }}
                />
            </div>

            {/* Optional film grain overlay */}
            {noise && noise.opacity > 0 && (
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
                        backgroundSize: `${noise.scale * 150}px`,
                        backgroundRepeat: 'repeat',
                        opacity: noise.opacity * 0.15,
                        mixBlendMode: 'overlay',
                    }}
                />
            )}
        </div>
    );
}
