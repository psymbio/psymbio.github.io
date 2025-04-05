---
layout: post
title: Experts in LLMs
tag: Agentic AI
category: posts
order: 1
pagestyle: base
pagestyle2: post
---

## When "A Helpful Assistant" Is Not Really Helpful: Personas in System Prompts Do Not Improve Performances of Large Language Models

[https://arxiv.org/pdf/2311.10054](https://arxiv.org/pdf/2311.10054)
[Code Repo](https://github.com/Jiaxin-Pei/Prompting-with-Social-Roles)

(1) Does adding personas to system prompts help improve model performance on objective tasks? (2) Does the social construct of the persona affect model performance? (3) What factors could potentially explain the effect of personas on model performance? (4) Can we automatically identify the best roles for prompting? Through our analysis, we find that, in general, prompting with personas has no or small negative effects on model performance compared with the control setting where no persona is added.

Our study makes the following three contributions. First, we introduce a new pipeline to systematically evaluate LLMs' performance when prompted with a wide range of personas. Second, our large-scale experiments reveal an important finding that prompting LLMs with personas might actually hurt their performance on objective tasks. Third, through analyzing a wide range of persona attributes and automatic role-searching strategies, we found that the effect of personas on model performance is not consistent across questions. While a certain persona may lead to the correct answer for each question, the presence of such personas is largely unpredictable.

[Relevant Code](https://github.com/Jiaxin-Pei/Prompting-with-Social-Roles/blob/main/scripts/ngram_frequency.py) (why?)

[Ngram Website](https://books.google.com/ngrams/graph?content=mom%2Cdad%2Cpapa%2Cmummy&year_start=1800&year_end=2022&case_insensitive=true&corpus=en&smoothing=5) (interesting)


Review: really simple paper - did absolutely nothing much than answer questions with a bit of statistics. Nice base setup for an LLM project where we just want to see the final result of how accurate an LLM is.

## Persona is a Double-edged Sword: Mitigating the Negative Impact of Role-playing Prompts in Zero-shot Reasoning Tasks

[https://arxiv.org/pdf/2408.08631](https://arxiv.org/pdf/2408.08631)

Look at that conf matrix comparing a neutral to a role based reply

Basic idea being - we get two solvers one with the persona and one without. Then if the selected response that we get from them is not the same we run an evaluator that tries to judge out of both the responses which one is the better response.

I would dig deeper if they had some code.

## ExpertPrompting: Instructing Large Language Models to be Distinguished Experts

[https://arxiv.org/pdf/2305.14688](https://arxiv.org/pdf/2305.14688)

1. Given an input instruction $q$, an aligned LLM (such as ChatGPT or Claude) produces an output $a$, which is the model's direct response to the instruction.
   
    $$ a = LLM(q) $$
2. The expert identity $e_q$ is created by conditioning the LLM on multiple relevant instruction-answer pairs. The operator $\oplus$ represents concatenation or combination of these pairs, allowing the model to generate an identity description that encapsulates expertise.
    
    $$ e_q = LLM(\{q_1, e_{q_1}\} \oplus \dots \oplus \{q_k, e_{q_k}\} \oplus q) $$
3. By providing both the expert identity $e_q$ and the original instruction $q$, the LLM is expected to generate an improved response $\hat{a}$, which should be more authoritative and accurate compared to $a$.
    
    $$ \hat{a} = LLM(\{e_q, q\}) $$

most ulti-inducing paper was this one but I guess the way they got their roles was actually better - for very descripting answers (and this paper is basically just comparing the length of the response - sigh)

---

These papers lay out a base idea of what role experts play out in LLMs.

## Knowledge Localization: Mission Not Accomplished? Enter Query Localization!

[https://openreview.net/pdf?id=tfyHbvFZ0K](https://openreview.net/pdf?id=tfyHbvFZ0K)

(Need to come back to this)

---

## Thought Vectors

[Blog Post](https://gabgoh.github.io/ThoughtVectors/)

Vectors do have meaning - and it has been especially seen in like anything with encoders. Then the question ultimately becomes if vectors have some underlying meaning can we do some math with them and see the results ourselves?

Like when you create a photo: man in short hair wearing sunglasses, for example, a decomposition might look like

$$\text{Encoder}(x) \approx (2 \cdot d_{\text{smile}}) - (1.5 \cdot d_{\text{long-hair}}) + (4 \cdot d_{\text{sunglass}}) + (1 \cdot d_{\text{masculinity}})$$

(If we were to look at the same thing in LLMs what kind of added functionality are we looking at?)

---

## Ablation Study Structure

Many papers have studied the effects of the presence of an expert in the prompt to improve the accuracy of an LM while answering questions. In our previous paper we have also seen an improvement [?]. In this paper we hope to understand what causes this improvement by looking at what components of the model architecture are responsible for this improvement using transcoders <span data-cite="dunefsky2024transcodersinterpretablellmfeature"></span> (While SAE <span data-cite="marks2025sparsefeaturecircuitsdiscovering"></span> features are often interpretable, they are typically dense combinations of many neurons, making it difficult to mechanistically trace how one feature influences another across layers. Previous work has used causal interventions and gradient-based techniques to study these interactions. Building on these ideas, we investigate how the presence of an expert in the prompt affects specific model features, aiming to identify which parts of the architecture drive the improvement in performance.). 

Ablation study first <span data-cite="pearl2013directindirecteffects"></span> (this first step is defined from SAE paper) We want to understand the direct and indirect effects of the presence of an expert in the prompt. 

It states:

A classical example of the ubiquity of direct effects
(Hesslow 1976) tells the story of a birth-control pill
that is suspect of producing thrombosis in women and,
at the same time, has a negative indirect effect on
thrombosis by reducing the rate of pregnancies (pregnancy is known to encourage thrombosis). In this example, interest is focused on the direct effect of the
pill because it represents a stable biological relationship that, unlike the total effect, is invariant to marital status and other factors that may affect women's
chances of getting pregnant or of sustaining pregnancy.
This invariance makes the direct effect transportable
across cultural and sociological boundaries and, hence,
a more useful quantity in scientific explanation and
policy analysis. 

Taking this criterion as a guideline, the direct effect
of $X$ on $Y$ (in our case $X=$gender $Y=$hiring) can
roughly be defined as the response of $Y$ to change in
$X$ (say from $X = x^\ast$ to $X = x$) while keeping all
other accessible variables at their initial value, namely,
the value they would have attained under $X = x^\ast$. This doubly-hypothetical criterion will be given precise mathematical formulation in Section 3, using the
language and semantics of structural counterfactuals
(Pearl 2000; chapter 7). 

As a third example, one that illustrates the policymaking ramifications of direct and total effects, consider a drug treatment that has a side effect - headache. Patients who suffer from headache tend to take aspirin which, in turn may have its own effect on the disease or, may strengthen (or weaken) the impact of the drug on the disease. To determine how beneficial the drug is to the population as a whole, under existing patterns of aspirin usage, the total effect of the drug is the target of analysis, and the difference $P(Y_x = y) - P(Y_x^\ast = y)$ may serve to assist the decision, with $x$ and $x^\ast$ being any two treatment levels. However, to decide whether aspirin should be encouraged or discouraged during the treatment, the direct
effect of the drug on the disease, both with aspirin and
without aspirin, should be the target of investigation.
The appropriate expression for analysis would then be
the difference $P(Y_{xz} = y) - P(Y_{x^\ast z} = y)$, where $z$ stands for any specified level of aspirin intake. 

<script>
document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('/assets/papers.json');
  const papers = await response.json();
  
  const citationMap = {}; // BibtexKey -> Number
  let citationCounter = 1; // Start numbering from 1

  document.querySelectorAll('span[data-cite]').forEach(span => {
    const keys = span.getAttribute('data-cite').split(',').map(k => k.trim());
    const numbers = [];
    let citationDiv = document.createElement('div');
    citationDiv.className = 'citation-tooltip';
    citationDiv.style.display = 'none';

    keys.forEach(key => {
      if (!(key in citationMap)) {
        citationMap[key] = citationCounter++;
      }
      const number = citationMap[key];
      numbers.push(number);

      const wrapper = document.createElement('div');
      wrapper.className = 'citation-entry';
      
      if (papers[key]) {
        const paper = papers[key];
        wrapper.innerHTML = `
          <b>${paper.author}</b> (${paper.year})<br/>
          <i>${paper.title}</i><br/>
          ${paper.journal || paper.howpublished || ''}<br/>
          ${paper.doi ? `DOI: <a href="https://doi.org/${paper.doi}" target="_blank">${paper.doi}</a>` : ''}
        `;
      } else {
        wrapper.innerHTML = 'Citation not found.';
      }
      
      citationDiv.appendChild(wrapper);

      // Add <hr> after each paper except last one
      if (key !== keys[keys.length - 1]) {
        citationDiv.appendChild(document.createElement('hr'));
      }
    });

    // Set text content like [1, 2, 3]
    span.textContent = `[${numbers.join(', ')}]`;
    span.style.cursor = 'pointer'; // indicate it's hoverable
    span.style.position = 'relative'; // so tooltip is relative to this span

    span.appendChild(citationDiv);

    // Show/hide logic
    span.addEventListener('mouseenter', () => {
      citationDiv.style.display = 'block';
    });
    span.addEventListener('mouseleave', () => {
      citationDiv.style.display = 'none';
    });
  });
});
</script>
