---
layout: post
title: "Chapter 1: Studying the Nervous System"
tag: Neuroscience Purves 6E
category: posts
order: 1
pagestyle: base
pagestyle2: post
---
This part of the series in the blog is going to explore what I'm most excited about. How do we go from neuron to cognition and if it is possible for computers to finally get there.

Here are my real life goals to suck out from this book. There's a couple of tests I'm going to be studying for:

1. [The Human Brain Project Curriculum](https://www.humanbrainproject.eu/en/education/participatecollaborate/curriculum/): they offer you credits depending on the number of courses you take. Now I'm not particularly aware of how valid or well recognized they are but the thing is, I don't think as computer science students we get to take tests that give us medical degrees in neuroscience. So, I think this is as good as it gets. Current status: Incomplete.

2. [Neuromatch Academy](https://www.neuromatchacademy.org/) Current status: Applied.

3. [mindCORE](https://mindcore.sas.upenn.edu/education/) Current status: Incomplete.

4. [mindCORE Undergrad Fellowship Program](https://mindcore.sas.upenn.edu/research/summer/) from June 7 – August 13, 2021: a deadline I just missed by two days. For next year remember: January 31st, 2022 is the last date to apply. Current status: Incomplete.

5. [100 CNS questions by CMU](https://www.cns.caltech.edu/academics/100questions.html) Current status: Incomplete.

6. [Medical Neuroscience on Coursera](https://www.coursera.org/learn/medical-neuroscience) Current status: Undergoing.

The reason I listed out stuff is because you have to have some value to the stuff you study, what is going to test you and how are you even qualified for something. What you want to do is keep collecting certificates and scores to keep you on track when you aren't in the program you want to be in and are hoping to reach for it during postgrad.

{% comment %}
https://brain.ieee.org/education/
mindcore: https://mindcore.sas.upenn.edu/
SCAN by UPENN
https://www.kavlifoundation.org/brain-initiative
https://www.gatsby.org.uk/
https://www.gatsby.org.uk/neuroscience/programmes
https://cifar.ca/research-programs/

https://neurograd.ucsd.edu/program/comp-neuro/comp-resources.html
{% endcomment %}

Now we're ready to start studying. The way this is going to be structured is I'll take a week's worth of course from Coursera's Medical Neuroscience course and try to mix in the book and the videos. But I think I'll list the videos notes in a separate section. Each blog post is going to be my understanding of an entire chapter. On a daily basis I'll be covering only 5 pages of this and 1 sub-topic from CLRS. Because I am a computer science student I find it almost impossible to learn and remember all of these biology terminology and their drawings and such. Prior to this my notes were really shabby and just a voice-to-text conversion of what was said in videos. I've looked at a couple of medical student notes now and I think I have a good idea of how I need to structure them. Although, if you're a medical student and have notes please save my life and send me a pdf through email.

Also, if you didn't notice the book is really expensive it costs about 600AED and I got it from Kinokuniya for half the price. It's so expensive, I feel obligated to read. So, because I don't mind piracy and all, if there are pictures or really insightful stuff in the book I'll put it here too.

## Overview

Try to understand brain functionality through basic tools in biology like genes, genomes, genetics, cellular and molecular biology, anatomy, physiology, behaviour, psychophysics and brain imaging. Get from how neurons perform their functions to higher-order brain functions like perception, memory, attention, language, thinking etc.

## Genetics and Genomics

What is a gene and what is a genome? No one in my field should have any idea and just recently I realized I shed off so much of my biology that I couldn't recall xylem and phloem.

DNA is the molecule that is the hereditary material in all living cells.

Genes are made of DNA, and so is the genome itself. A gene consists of enough DNA to code for one protein, and a genome is simply the sum total of an organism's DNA.

For more details visit the [Genome News Network](http://www.genomenewsnetwork.org/resources/whats_a_genome/Chp1_4_1.shtml).

A [gene](https://en.wikipedia.org/wiki/Gene) has DNA coding sequences that are copied into messenger RNA (mRNA) ultimately translated into a protein and regulatory DNA. Genomics then helps us understand how DNA determines the assembly and operation of the nervous system. We have 20,000 genes out of which 14,000 are expressed in the nervous system, of which 8,000 represent cells and tissues, including the nervous system and 6,000 of just the nervous system.

Altered genes can be the underlying reason of neurological and psychiatric disorders. Example: mutation of a single gene regulates mitosis which could result in microcephaly where the brain and head don't grow and brain function is diminished.

<img alt="microcephaly" src="/images/2021/neuroscience/microcephaly.png" height="70%" width="70%">

Apart from this, mutant genes can cause degenerative disorders like Parkinson's and Huntington's. So gene-based therapies might be the answer to these diseases. You do have to remember it's not such a proportional relationship between genes and diseases, genomic information doesn't solely decide on how the brain operates. We need to understand cell biology, anatomy, physiology and neural circuitry.

## Cellular Components of the Nervous System

There's a saucy fight here. We're looking at the 1930's and Cajal and Golgi are fighting about the structure of the nerve cell. Golgi says nerve cells create an interconnected network as a unit and Cajal says they communicate through synapses, which meant that ultimately the unit of a neuron was smaller. Cajal is correct, but both get awarded. Then scientists find out about these synapses.

Then two broad categories are formed: nerve cells or neurons and glial cells/glia or neuroglia.

+ Neuron: electrical signaling
+ Glia: support that signaling (like bras and boobs), develop the nervous system, and help in repair and regrowth of it.

## Neurons

<img alt="neuron" src="/images/2021/neuroscience/neuron.gif" height="70%" width="70%">

We all know neurons because of the synaptic connections they form. This highlights the two main parts of a neuron: dendrites and the axon. Most neurons have only one axon as branching are not as elaborate as the one seen in dendrites. Dendrites take synaptic inputs from the axon terminals of other neurons.

<img alt="neuron" src="/images/2021/neuroscience/neuron.png" height="120%" width="120%">

(I know it's a horrible drawing, but given the amount of time I spend on such shit it's acceptable as long as it looks like what it's supposed to look like)

In red I've marked the convergence, and here the degree of convergence is the number of inputs to that neuron.

In green divergence, which is number of targets innervated by any one neuron.

Synaptic connections are made and typically the axon terminal of the presynaptic neuron is adjacent to the postsynaptic neuron's receptors of the target cell. During a synapse neurotransmitters traverse through the extracellular space between called a synaptic cleft: which helps in the diffusion, binding and degradation of these neurotransmitters.

Information from the synapses is read-out at the axon and relayed as electric signals for a few micrometers.

+ Local circuit neurons or interneurons: short axons
+ Projection neurons: extend large distances. Ex: from spinal cord to foot.
+ Action Potential: spikes/electric signals are all-or-nothing changes in the electric potential across the nerve cell membrane to convey information.
+ Synapses: chemical synapse and electrical synapse.
+ Synaptic vesicles: secretory organelles at the presynaptic terminal, circular structures filled with neurotransmitters/neuroactive molecules.

## Glial Cells

+ It doesn't participate in synaptic transmission.
+ Have supportive functions that help in defining synaptic connections.
+ Give rise to new glia.
+ Modulate rate of nerve signal propogation and synaptic action by controlling metabolism of neurotransmitters near the synaptic cleft.
+ Provide a <span data-tooltip="Scaffolds are materials that have been engineered to cause desirable cellular interactions to contribute to the formation of new functional tissues for medical purposes. Cells are often 'seeded' into these structures capable of supporting three-dimensional tissue formation." data-tooltip-position="bottom"><i>scaffold</i></span> for neural developments.
+ Recovery from neural injury.
+ Interface between the brain and the immune system.
+ Facilitate convective flow of interstitial fluid through the brain during sleep to wash out the metabolic waste.

There are three types of glial cells:
1. Astrocytes
2. Oligodendrocytes
3. Microglial cells

### Astrocytes

+ Restricted to the <span data-tooltip="The brain and spinal cord" data-tooltip-position="bottom"><i>CNS</i></span>.
+ They have a <span data-tooltip="astral" data-tooltip-position="bottom"><i>starlike</i></span> appearance.
+ Maintains the chemical environment for neurological signaling.
+ Forms the blood-brain barrier.
+ Secrete substances that that influence the formation of new synaptic connections.
+ A subset of astrocytes retain the characteristics of the stem cell.

### Oligodendrocytes

+ Restricted to the <span data-tooltip="The brain and spinal cord" data-tooltip-position="bottom"><i>CNS</i></span>.
+ Lay down a lipid-rich wrapping around some axons. Myelin increases the speed of transmission of  electrical signals.
+ In the <span data-tooltip="peripheral nervous system" data-tooltip-position="bottom"><i>PNS</i></span> the cells that provide the myelin are called **Schwann Cells**.
+ In the mature nervous system subsets of the oligodendrocytes and schwann cells retain neural stem properties and can generate new oligodendrocytes and schwann cells in response to injury.

### Microglial Cells

+ Derived from hematopoietic precusrsor cells (but some from neural precursor cells).
+ They share properties with microphages.
+ Are scavenger cells that remove cellular debris from injury sites.
+ Secrete signaling molecules(like cytokines) to modulate the local inflammation and influence whether other cells die or live.
+ Microglia at the site of brain injury dramatically increase.

In addition to these three, we have **glial stem cells**. These reatin the capacity to proliferate and generate glia and sometimes neurons.

Some of the astrocytes and oligodendrocytes(polydendrocytes) have properties of proliferation, self-renewal, and the capacity to make all cell classes of a particular tissue.

## Cellular Diversity in Nervous System

86 billion different types of neurons are known to exist.

## Neural Circuits

Neurons don't function in isolation, they form **neural circuits**.

Neuropil: What a synaptic connection constitutes of (dendrites, axon, glial processes).

Afferent Neurons: Carry information to the brain or spinal cord.

Efferent Neurons: Carry information away from the brain or spinal cord.

[Myotactic Reflex]

## Organization of Human Nervous System

Neural circuits processes information for sensory, motor and associational systems.

CNS: brain(cerebral hemispheres, diencephalon, cerebellum, and brainstem) + spinal cord

PNS: The PNS consists of the nerves and ganglia outside the brain and spinal cord: <span data-tooltip="link sensory receptors on the body surface to processing parts in the CNS." data-tooltip-position="bottom"><i>sensory neurons</i></span> and <span data-tooltip="has two parts: somatic and autonomic motor division" data-tooltip-postion="bottom"><i>motor portion</i></span>. The peripheral nervous system is divided into the somatic nervous system and the autonomic nervous system. Somatic nervous system are motor axons that connect the brain and the spinal cord to skeletal muscles. Visceral/autonomic motor division is made up of cells and axons that innervate smooth muscle, cardiac muscle, and glands.

Gray Matter: accumulation of <mark>cell bodies and neuropil</mark> in the brain and the spinal cord.

White Matter: (light appearance due to lipid in myelin) refers to axon tracts and commissures.

Nucleus: Local accumulation of neurons with roughly similar functions.

Cortex: Sheet-like arrays of nerve cells.

Tracts: 

Commissures: 

Columns:

[Quiz Guide](https://quizlet.com/au/238594832/neuroscience-cells-of-cns-and-basic-orientation-flash-cards/)