---
title: RF Circuit Design Labs
context: Radio Frequency Circuit Design (E157) · Fall 2026
summary: Hands-on RF labs where I predict, simulate and then measure the same circuit, and explain every gap quantitatively. Transmission line reflections on an oscilloscope, VNA calibration, and a hand-soldered L-match on a 100 MHz test board.
tags: [VNA, Smith chart, Impedance matching, Transmission lines, LTspice, Python, MATLAB]
cover: ./images/lmatch-final.jpg
coverAlt: Finished L-match on the test board, with its measured and simulated Smith chart
featured: true
order: 2
---

E157 is Harvey Mudd's RF circuit design course. Every lab follows the same loop: work out the answer on paper, simulate it in LTspice, build and measure it, then explain any difference with numbers rather than hand-waving. Parasitic extraction, adding the small inductances and capacitances real parts have until the simulation matches the measurement, is a big part of that.

## Impedance matching with a VNA

**Goal:** match a 270 Ω load to a 50 Ω line at 100 MHz with an L-network, built component by component on a surface-mount test board.

### Calibrating the VNA

Before calibration the VNA measures everything between its internal port and the load, including a meter of coax. That cable adds phase that grows with frequency, so a plain short circuit sweeps around the edge of the Smith chart instead of sitting at one point. Cable loss also pulls the magnitude below 1, and more so at higher frequency because of skin effect and dielectric loss. My measurement, LTspice simulation and hand analysis all agreed once I used the lab cable's velocity factor of 0.66.

![Uncalibrated: a 1 m cable with a short circuit, measured against LTspice and theory](./images/uncal-short-smith.png)

![Uncalibrated reflection phase wrapping across 70–130 MHz](./images/uncal-short-phase.png)

An open/short/load calibration solves for the error terms at every frequency point. After it, the short collapses to Γ = −1, the open to +1 and the 50 Ω load to the center. Changing the span to 90–110 MHz without recalibrating smeared the points out again slightly, a good reminder that a calibration only holds for the frequencies it was taken at.

![Calibrated: the same short now sits at a single point, Γ = −1](./images/cal-short-smith.png)

### Building the match one part at a time

My 270 Ω load was a 330 Ω and a 1.5 kΩ resistor in parallel. Its measured reflection at 100 MHz pointed to about 257 Ω instead, so I redesigned around the measured value rather than the nominal one.

I soldered the shunt inductor first and measured again. The closest part to my calculated 204 nH was 220 nH, which put the load at 57.7 + j107 Ω. From that measured point I recalculated the series capacitor, C = 1 / (2π · 107 Ω · 100 MHz) ≈ 14.9 pF, and used 15 pF. Checking the Smith chart after every part is how you get a good match from hand-assembled boards.

![After the first part: the 220 nH shunt inductor moves the load up the chart](./images/lmatch-step1.jpg)

![The finished L-match: measured, simulated and theory curves, and the board](./images/lmatch-final.jpg)

### Results

The best match landed at 96.4 MHz. Using a |Γ| = 1/3 bandwidth from 82.9 to 117.7 MHz, the measured Q was **2.77**, against **2.34** from my model. I traced the 15% difference to part tolerances, the inductance of the 0 Ω jumpers, and some unmodeled parasitic capacitance: the low band edge matched exactly, but the high edge came in early, which is what extra capacitance would do.

![Measured |Γ| vs. frequency with the markers used to compute Q](./images/q-measurement.png)

## Reflections on transmission lines

**Goal:** predict the step response at three points along a chain of 50 Ω BNC cables for open, short, matched, 22 Ω and 200 Ω terminations, then build each case and match it in simulation.

I wrote a Python model that tracks each incident and reflected wave, using Γ = (Z<sub>L</sub> − Z<sub>0</sub>) / (Z<sub>L</sub> + Z<sub>0</sub>) and a delay of 1.54 ns per foot for 0.66c cable. For a shunt resistor partway down the line with a mismatched load, the wave bounces between the two discontinuities, so the model loops until the voltage settles at the DC voltage-divider value.

![Python theory vs. ideal LTspice for an open termination, at all three channels](./images/tline-open-theory.png)

The real measurements had slower edges, overshoot and some loss. To explain them I added parasitics to the LTspice model one at a time: series inductance at the connectors, shunt capacitance at the probes, and short sections of line for the BNC tees. With those in place the simulation follows the oscilloscope closely.

![LTspice model with the parasitic elements I extracted](./images/ltspice-parasitics.png)

![Open termination: oscilloscope (solid) vs. my fitted simulation (dashed)](./images/tline-open.png)

![Short termination: measured vs. simulated](./images/tline-short.png)

I also used the measurements to work backwards. With a 200 Ω termination, the reflected step implied an effective load of about 128 Ω at the edge, which pointed to parasitic capacitance at the resistor and connector.

### Standing waves

For a 22 Ω load I predicted a VSWR of 2.27 and swept a sine wave from 3.4 to 6.8 MHz, the range that spans one maximum and one minimum at the probe point. Fitting a lossy line model to the measured sweep lined the simulation up with the oscilloscope.

![Standing wave amplitude vs. frequency: oscilloscope against lossy LTspice model](./images/standing-wave.png)

## What I'm taking from it

Design from what you measure, not from the label on the part. Both labs went better once I treated each measurement as data for the next decision, whether that was resizing a capacitor or adding a parasitic to the model.
