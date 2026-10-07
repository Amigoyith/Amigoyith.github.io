---
title: Research Assistant
short: PoSM Lab
org: Physics of Soft Matter Lab
dates: September 2023 – January 2025
location: Harvey Mudd College
kind: Research
order: 5
summary: Studied the physics of latch-mediated spring-actuated systems through experiments and simulation, and automated the lab's recoil-motion analysis.
tags: [MATLAB, Computer vision, High-speed video, Data analysis]
cover: ./poster.jpg
coverHref: /files/recoil-poster.pdf
coverAlt: Research poster, Measuring the High-Rate Large Deformation Recoil of Elastic Materials
highlights:
  - Automated recoil-motion analysis in MATLAB, tracking elastic-material position with the Computer Vision Toolbox and smoothing the data to characterize energy efficiency.
  - Co-authored the poster "Measuring the High-Rate Large Deformation Recoil of Elastic Materials," presented at the SoCal Soft Matter Symposium and the APS Physics Global Summit.
---

## The research

Animals like slingshot spiders store elastic energy slowly and release it almost instantly: their webs recoil in about 10 ms with accelerations above 10³ m/s². Our lab, led by Prof. Mark Ilton, studies the physics behind these latch-mediated spring-actuated systems. In this project we measured how an elastic strip recoils at high rates and large deformations, and compared it to a simulation built from the material's independently measured viscoelastic properties. You can read more about the lab at [posmlab.org](https://posmlab.org/).

## My contribution

In the recoil experiment, a neoprene strip marked with dots is stretched, held by a pneumatic clamp, and released while a high-speed camera films it at 10,000 frames per second. I automated the analysis in MATLAB. The Computer Vision Toolbox tracks every dot frame by frame, and I smooth the position data with free-knot spline fitting so it can be differentiated cleanly into velocity and acceleration. From those I compute kinetic energy and the force on the strip by inverse dynamics (F = M·a<sub>CM</sub>), which we checked against a force sensor sampling at 38 kHz.

## What we found

- The material is less energy-efficient during a fast recoil than when it is loaded and unloaded slowly (0.86 resilience at 1 mm/s), which matches earlier controlled-rate measurements.
- The measured trajectories lag the simulation slightly, which is consistent with friction from the clamp during release.
- In the viscoelastic model, short relaxation times act like dampers during recoil, while long relaxation times act like compressed springs.

## Poster

*Measuring the High-Rate Large Deformation Recoil of Elastic Materials.* S. Lubis, C. Schofield, A. Acker, **A. Liu**, T. Han, M. Ilton. Presented at the SoCal Soft Matter Symposium and the APS Physics Global Summit. [Download the poster (PDF)](/files/recoil-poster.pdf)
