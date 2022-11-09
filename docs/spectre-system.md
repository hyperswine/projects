---
sidebar_position: 1
---

# Spectre System

![Spectre](/img/Spectre.png)

The spectre system is a computing platform that is built from first principles.
Minimalism, user-centric, efficiency and scalablility are philosophies I like.

Sure, you don't need to be $100\%$ efficient, but even $97\%$ is much much better than $40\%$ or even $70\%$. Especially for devices we carry on us and use as supplementing tools. For high end servers and computing racks, the philosophy changes somewhat.

The spectre hardware design involves a set of compute units such as a minimalist SoC and interconnect system. We rely more on wireless connectivity through 2.4-5GHz connections for peripherals such as mice and keyboards, headsets and displays. Charging is done through magnetised thunderbolt 5. Other peripherals such as 2FA keys and crypto keys are accomplished through NFC.

## Spectre ISA

The spectre ISA is quite simple. It consists of like 10 atomic instructions:

```rust
Type1 addr, addr:
    Add
    Sub
    Mult
    Div
    And
    Or
    Xor
    // map array, function
    Map
Type2 addr:
    Not
    Jump
    StoreVal
Type3:
    Return
Type4 addr, size:
    Sha256
    Lookup
    FourierTransform
```

## Spectre-U and Spectre-S

Spectre User is the user optimised configuration of the spectre system.

Spectre Server is the high end optimised configuration of the spectre system. Instead of focusing on efficiency, heat generation, etc. We mainly focus on scalability and the highest performance possible.

## A deep dive

How does spectre work exactly?

First, we start with a concept known as an "executor". An executor is an hardware unit whose sole job is to execute a function. We also have something known as an array executor. An array executor can be seen as an SIMD unit. This may be similar to other accelerators such as the SHA-256 and etc.

There are three main types of executors:

- I-type executors
- D-type SIMT executors
- Accelerator executors

A spectre instruction targets a specific executor. It first gets decoded in decode stage 1 and placed into queue stage 1. There it is dequeued to a chosen executor cluster. It is then decoded again and queued to execute in an available executor suited for it.

## Backers

If you back spectre, you will get a few free samples when they are available.

[Pledge Here](/docs/support.md)
