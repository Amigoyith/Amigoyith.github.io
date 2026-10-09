---
title: Reflections on Transmission Lines
label: Lab 2
context: E157 Lab 2 · Fall 2026
summary: Predicting step responses along a chain of BNC cables in Python, then measuring them on an oscilloscope and fitting an LTspice model with extracted parasitics until simulation and measurement agree.
tags: [Transmission lines, Oscilloscope, LTspice, Python, Parasitic extraction]
cover: ./images/tline-open.png
coverAlt: Open termination step response, oscilloscope (solid) against the fitted simulation (dashed)
order: 2
---
**Goal:** predict the step response at three points along a chain of 50 Ω BNC cables for open, short, matched, 22 Ω and 200 Ω terminations, then build each case and match it in simulation.

I wrote a Python model that tracks each incident and reflected wave, using Γ = (Z<sub>L</sub> − Z<sub>0</sub>) / (Z<sub>L</sub> + Z<sub>0</sub>) and a delay of 1.54 ns per foot for 0.66c cable. For a shunt resistor partway down the line with a mismatched load, the wave bounces between the two discontinuities, so the model loops until the voltage settles at the DC voltage-divider value.

![Python theory vs. ideal LTspice for an open termination, at all three channels](./images/tline-open-theory.png)

The real measurements had slower edges, overshoot and some loss. To explain them I added parasitics to the LTspice model one at a time: series inductance at the connectors, shunt capacitance at the probes, and short sections of line for the BNC tees. With those in place the simulation follows the oscilloscope closely.

![LTspice model with the parasitic elements I extracted](./images/ltspice-parasitics.png)

![Short termination: measured vs. simulated](./images/tline-short.png)

I also used the measurements to work backwards. With a 200 Ω termination, the reflected step implied an effective load of about 128 Ω at the edge, which pointed to parasitic capacitance at the resistor and connector.

## Standing waves

For a 22 Ω load I predicted a VSWR of 2.27 and swept a sine wave from 3.4 to 6.8 MHz, the range that spans one maximum and one minimum at the probe point. Fitting a lossy line model to the measured sweep lined the simulation up with the oscilloscope.

![Standing wave amplitude vs. frequency: oscilloscope against lossy LTspice model](./images/standing-wave.png)
