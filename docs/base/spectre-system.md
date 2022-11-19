---
sidebar_position: 1
---

# Spectre System

![Spectre](/img/Spectre.png)

The [spectre system](https://hyperswine.github.io/spectre) is a computing platform that is built from first principles.
Minimalism, user-centric, efficiency and scalablility are philosophies I like.

## Spectre-U and Spectre-S

Spectre User is the user optimised configuration of the spectre system. It is the config that you and I would want to use on daily basis in our smartphones, watches, laptops, etc. There is a subset of Spectre-S (Spectre-E) that is used in embedded.

Spectre Server is the high end optimised configuration of the spectre system. Instead of focusing on efficiency, heat generation, etc. We mainly focus on scalability and the highest performance possible.

---

## Executors

How does spectre work exactly?

First, we start with a concept known as an "executor". An executor is a hardware unit whose job is to execute a `function`. We also have something known as an array executor. An array executor can be seen as an SIMD unit. Finally we have accelerator type executors for rapid, low latency SHA-256 and etc. This is for Spectre-U; for Spectre-S, we optimise instead for higher throughput.

:::tip
The three main types of executors:

- I-type executors
- D-type SIMD executors
- Accelerator executors
:::

A spectre instruction targets a specific executor. It first gets decoded in decode stage 1 and placed into queue stage 1. There it is dequeued to a chosen executor cluster. It is then decoded again and queued to execute in an available executor suited for it.

Like gpgpu shader clusters, executor complexes can be seen as SIMT-able units.

### Functions

Functions are defined as parameterised blocks of code to be "called" into, ran from start to finish, and be "returned" from.

The spectre architecture knows of functions in the above form. The first thing that's run on a spectre system is the `_entry` function of a process. The first process to exist is the BIOS firmware process, which is semi hardcoded into the uarch. All subsequent processes follow a similar route of entry. Each time a process exits it returns from `_entry` to the caller. In the context of userspace applications, this is the in memory scheduler driver library. In the context of the kernel, it is the bootloader and BIOS, and eventually the `_reset` instruction which is like a hard return.

Functions are called by jumping to their absolute addresses, or relative addresses if you want to save memory. All arguments passed to the function would be saved onto the thread's stack beforehand. The way it does so is through the spectre calling convention. Its actually quite simple:

```rust
// language code
f: (int: i32) => int + 1

f()

// machine code
f:
    store $sp + 1
    jump $sp - size_of_args

callee:
    store return_addr
    store int
    jump f
    // would then pop if need be 
```

Now would it possibly use more memory sometimes? Maybe. But I think it is a worthy tradeoff for efficiency.

### Peripheral Communication

Any device or system not embedded on the main system (usually the SoC) itself would require peripheral protocols. These include PCIe, USB, Motherboard bus, etc.

Furthermore, the latency (and possibly throughput) associated with peripheral communication are orders of magnitude slower than inter-SoC communication. "Functions" executed by peripheral systems may also be subject to sporadic user input, unstable internet connections, etc. Hence the concept of direct function execution cannot be applied as easily. Instead, a hardware based effect system is used to manage and wait on peripheral systems which may take their time to reply.

We refer to peripheral communication as IO. Most IO are performed through memory mapped reads and writes. A userspace application would link a driver in execute only mode and call it through a library each time it wants to e.g. read from disk, communicate with devices and computers through the wireless card. The driver code may request a DMA transaction by writing to the memory mapped DMA controller with the request struct. If not contentious, the request would be promptly processed and the controller would stream the request packet to the desired device.

---

## Spectre ISA

The spectre system is unique in that is has a uniform instruction set. That means to program all executors you simply use the same context. Unlike cpu-gpu splits where you have to program each separately through e.g. shaders.

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
Type5 addr, addr, size:
    Read
    Write
```

:::note
**Chip Design**

The latest SoA designs use chiplets and die stacking. As well as maximising the bandwidth of buses. Spectre utilises SoC based chiplets for combining executor clusters, memory units, and caches. It forces as many components together as possible and utilises wireless networking where possible to interface with peripheral devices. Gone are the days of USB, HDMI, PCIe, or what have you. Everything is packaged together nicely and can be upgraded together if you wish to reuse the chassis or the board.

Less is more.
:::

---

## Expected Performance

I haven't tested it yet. But Im quite confident that it could see some pretty significant performance increases.

The biggest parts come from the lack of interrupts and pipeline flushing, less code to execute (maybe much less), enlightening compiler that generates efficient code based on SIMD on `map` and in-place/uniqueness values. Functions are never inlined and jump is fast. I-cache and D-cache are increased, especially D-cache. In a typical userspace GUI app, there is literally nothing that could interrupt the user's input so there is minimal latency. Since the CPU and PPU are combined into an MPU there is also minimal latency between CPU and PPU, and in fact, you can write "shaders" right in normal software and the shader functions/instructions get compiled in the same program to form specific D-type instructions. If you want specific accleration, use the acceleration library afforded by neutronapi or rei::std.

### Mathematical Analysis of Possible Performance

Here I will attempt to analyse exactly how much performance a spectre-v1 SoC can afford vs a chip like the Snapdragon 888.

Notice that the SN888 is arm-based and has a ton of extra stuff on it which I kind of just think is bloat.

```rust
let sn888 = Chip {
    cpu: [CortexA77(); 8]
}
```

:::note
Sure, you don't need to be $100\%$ efficient, but even $97\%$ is much much better than $40\%$ or even $70\%$. Especially for devices we carry on us and use as supplementing tools. For high end servers and computing racks, the philosophy changes somewhat.

The spectre hardware design involves a set of compute units such as a minimalist SoC and interconnect system. We rely more on wireless connectivity through 2.4-5GHz connections for peripherals such as mice and keyboards, headsets and displays. Charging is done through magnetised thunderbolt 5. Other peripherals such as 2FA keys and crypto keys are accomplished through NFC.
:::

---

## Backers

:::tip
If you back spectre, you will get a few free samples when they are available.

[Pledge Here](/docs/about/support)
:::

Those who have pleged:

- Quantii

## Tiers

| Feature   |      Description      |  Pledge ($USD) |
|----------|:-------------:|------:|
| Basic | Basic board (does not include extras) | 15 |
| Standard | It just works | 25 |
| Premium | The whole shebang | 35 |

```mdx-code-block
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { motion } from "framer-motion"

<Card style={{ padding: '1rem', display: "flex", justifyContent: "space-between" }}>
<motion.div layout
  whileHover={{ scale: 1.025, boxShadow: '2px 2px #9E9E9E' }}
  whileTap={{ scale: 1.025 }}
  style={{ marginBottom: '1rem' }}
>
    <Card style={{ padding: '1rem' }}>
        <Card.Body>
            <Card.Title>Tier 1</Card.Title>
            <Card.Text>
                Pledge $15 and get access to the basic pack: 
            </Card.Text>
            <Button variant="primary" href="/docs/about/support">Pledge</Button>
        </Card.Body>
    </Card>
</motion.div>

<motion.div layout
  whileHover={{ scale: 1.025, boxShadow: '2px 2px #9E9E9E' }}
  whileTap={{ scale: 1.025 }}
  style={{ marginBottom: '1rem' }}
>
    <Card style={{ padding: '1rem' }}>
        <Card.Body>
            <Card.Title>Tier 2</Card.Title>
            <Card.Text>
                Pledge $25 and get access to the medium pack: 
            </Card.Text>
            <Button variant="primary" href="/docs/about/support">Pledge</Button>
        </Card.Body>
    </Card>
</motion.div>

<motion.div layout
  whileHover={{ scale: 1.025, boxShadow: '2px 2px #9E9E9E' }}
  whileTap={{ scale: 1.025 }}
  style={{ marginBottom: '1rem' }}
>
    <Card style={{ padding: '1rem' }}>
        <Card.Body>
            <Card.Title>Tier 3</Card.Title>
            <Card.Text>
                Pledge $35 and get access to the exclusive hyper pack: 
            </Card.Text>
            <Button variant="primary" href="/docs/about/support">Pledge</Button>
        </Card.Body>
    </Card>
</motion.div>
</Card>
```

---

<script type="module" src="https://unpkg.com/giscus?module"></script>

<giscus-widget repo="hyperswine/projects"
        repoid="R_kgDOIZg-sQ"
        category="Announcements"
        categoryid="DIC_kwDOIZg-sc4CSmin"
        mapping="pathname"
        strict="0"
        reactionsenabled="1"
        emitmetadata="0"
        inputposition="top"
        theme="preferred_color_scheme"
        lang="en"
        loading="lazy"
        crossorigin="anonymous">
</giscus-widget>
