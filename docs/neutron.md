---
sidebar_position: 2
---

# Neutron

The neutron kernel is a minimalist, strictly neutral kernel. Neutrons stabilize the nucleus, and neutron stabilises the core of the system.

## Features

Capability based security with in memory drivers. Security is enforced through the chunk allocation scheme and full position independent code execution. Any app that wishes to run must be validated to contain only PIC. Most shared objects come in the form of vDSOs and dynamic libraries loaded by another in memory driver controlled by the gui or `spx:system` in the case of headless mode.

Efficiency and speed. Neutron is written in rei and naturally compiles down to code without many bottlenecking locations such as intense loops, in kernel code, etc. In fact, neutron itself doesnt do much after its done loading everything it needs to. It mostly just sits there handling hardware interrupts and rescheduling subscribed threads. The in memory drivers directly bypass the kernel in most cases and use MPMC primitives on execute-only chunks. Note that a lot of rei code like branches actually compile down to something called a direct hash jump. This allows code to jump directly to an offset based on the result of a computation.

RISC-V is a first class citizen. Neutron is optimised for RISC systems and RISC-V is the new kid on the block. I don't have to pay any royalties to David Patterson.

## Benchmarks

I would love to show some benchmarks. But later.
Some would be in a VM.
