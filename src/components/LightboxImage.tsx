"use client";
import React, { useState } from "react";

interface LightboxImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
	aspectRatio?: string;
}

export function LightboxImage({ src, alt, aspectRatio = "16 / 9", style, ...props }: LightboxImageProps) {
	const [open, setOpen] = useState(false);
	return (
		<>
					<div
						style={{
							aspectRatio,
							width: "100%",
							position: "relative",
							cursor: "pointer",
							marginBottom: 24,
							...style,
						}}
				onClick={() => setOpen(true)}
				tabIndex={0}
				role="button"
				aria-label="Open image in lightbox"
				onKeyDown={e => { if (e.key === "Enter" || e.key === " ") setOpen(true); }}
			>
				<img
					src={src}
					alt={alt}
					style={{
						width: "100%",
						height: "100%",
						objectFit: "cover",
						display: "block",
						borderRadius: 8,
					}}
					loading="lazy"
					{...props}
				/>
			</div>
			{open && (
				<div
					onClick={() => setOpen(false)}
					style={{
						position: "fixed",
						inset: 0,
						background: "rgba(0,0,0,0.9)",
						zIndex: 1000,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						cursor: "zoom-out",
					}}
					tabIndex={0}
					role="dialog"
					aria-modal="true"
					onKeyDown={e => { if (e.key === "Escape") setOpen(false); }}
				>
					<img
						src={src}
						alt={alt}
						style={{
							maxWidth: "90vw",
							maxHeight: "90vh",
							objectFit: "contain",
							borderRadius: 12,
							boxShadow: "0 4px 32px rgba(0,0,0,0.5)",
						}}
					/>
				</div>
			)}
		</>
	);
}
