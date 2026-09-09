# Portfolio copy review

Copy-only revisions. All project entries, experience entries, links, tags, components, layout, typography, and motion are preserved.

Evidence: `website/src/data/projects.js`, existing blog content, `PRODUCT.md`, and `website/public/resume.pdf`. The resume supports WalnuTech PBC Inc., October 2025 - Present, Python/Flask/LangGraph, asynchronous ingestion, API failure tests, 10 seconds to 200ms per scholarship, and A100 model training. No support was found for the hero 15ms figure or Dean's List claim. Existing education status is retained; graduation is not inferred from the expected date.


## website/src/app/blog/page.js


BEFORE:

```text
Notes from the build floor.
```


AFTER:

```text
What I learned building this.
```


WHY: Keeps a personal blog voice while naming the subject of the writing.


BEFORE:

```text
Field notes on AI systems, product details, cloud infrastructure,
            and the engineering choices behind the work.
```


AFTER:

```text
Notes on AI systems, interface details, cloud infrastructure,
            and the engineering choices behind my projects.
```


WHY: Keeps a personal blog voice while naming the subject of the writing.


## website/src/app/layout.js


BEFORE:

```text
title: "Kashyap Hegde Kota | Creative Developer Portfolio",
```


AFTER:

```text
title: "Kashyap Hegde Kota | AI Product Engineer",
```


WHY: Uses the established AI product engineer identity in page metadata.


## website/src/components/Contact.js


BEFORE:

```text
const defaultPhrase = "Let's build the next sharp thing.";
```


AFTER:

```text
const defaultPhrase = "Tell me what you're building.";
```


WHY: Makes the invitation personal and direct, and states recruiting availability and technical interests plainly.


BEFORE:

```text
I am interested in internships, AI product work, cloud-heavy
              systems, and small teams where design taste matters as much as
              throughput.
```


AFTER:

```text
I&apos;m looking for internships and full-time roles in software and AI
              engineering. I&apos;m interested in AI products, cloud systems, and
              small teams that care about usability and performance.
```


WHY: Makes the invitation personal and direct, and states recruiting availability and technical interests plainly.


BEFORE:

```text
Start a conversation
```


AFTER:

```text
Email me
```


WHY: Makes the invitation personal and direct, and states recruiting availability and technical interests plainly.


## website/src/components/ExperienceTimeline.js


BEFORE:

```text
"Focused on distributed systems, applied machine learning, web infrastructure, and product engineering craft.",
    impact: ["Dean's-list velocity", "CS foundations", "Research-first build habits"],
```


AFTER:

```text
"Focused on distributed systems, applied machine learning, web infrastructure, and product engineering.",
    impact: ["AI and ML coursework", "CS foundations", "Research projects"],
```


WHY: Uses the actual WalnuTech role, dates, pipeline, tests, and latency result from the resume. Replaces vague phrasing and the unverified award implication with supported study and project details.


BEFORE:

```text
org: "Industry Engineering Team",
    date: "2025",
```


AFTER:

```text
org: "WalnuTech PBC Inc.",
    date: "October 2025 - Present",
```


WHY: Uses the actual WalnuTech role, dates, pipeline, tests, and latency result from the resume. Replaces vague phrasing and the unverified award implication with supported study and project details.


BEFORE:

```text
"Contributed to production workflows with a bias for clear interfaces, reliable APIs, and fast iteration loops.",
    impact: ["Feature delivery", "API integration", "Code review discipline"],
```


AFTER:

```text
"Built a human-in-the-loop scholarship data pipeline with Python, Flask, and LangGraph. Added LLM verification and asynchronous ingestion, reducing processing time from 10 seconds to 200ms per scholarship.",
    impact: ["LLM verification", "Async ingestion", "API failure tests"],
```


WHY: Uses the actual WalnuTech role, dates, pipeline, tests, and latency result from the resume. Replaces vague phrasing and the unverified award implication with supported study and project details.


BEFORE:

```text
title: "AI Systems Builder",
```


AFTER:

```text
title: "AI Project Developer",
```


WHY: Uses the actual WalnuTech role, dates, pipeline, tests, and latency result from the resume. Replaces vague phrasing and the unverified award implication with supported study and project details.


BEFORE:

```text
"Built retrieval, captioning, recommender, and code-assistant systems across cloud, model, and frontend boundaries.",
```


AFTER:

```text
"Built research paper search, image captioning, episode recommendations, and an algorithm tutor, including model training, cloud deployment, and web interfaces.",
```


WHY: Uses the actual WalnuTech role, dates, pipeline, tests, and latency result from the resume. Replaces vague phrasing and the unverified award implication with supported study and project details.


BEFORE:

```text
<p className="mb-4 text-sm font-semibold uppercase text-ember">Signal path</p>
```


AFTER:

```text
<p className="mb-4 text-sm font-semibold uppercase text-ember">Background</p>
```


WHY: Uses the actual WalnuTech role, dates, pipeline, tests, and latency result from the resume. Replaces vague phrasing and the unverified award implication with supported study and project details.


BEFORE:

```text
Experience shaped by building in public.
```


AFTER:

```text
Experience and education.
```


WHY: Uses the actual WalnuTech role, dates, pipeline, tests, and latency result from the resume. Replaces vague phrasing and the unverified award implication with supported study and project details.


## website/src/components/Hero.js


BEFORE:

```text
{ value: "A100", label: "GPU data pipelines" },
  { value: "15ms", label: "retrieval-minded builds" },
```


AFTER:

```text
{ value: "A100", label: "model training" },
  { value: "FAISS", label: "vector retrieval" },
```


WHY: Names the engineering work and next action directly. A100 training is supported by the resume; FAISS replaces the unsupported 15ms claim.


BEFORE:

```text
Open to bold engineering work
```


AFTER:

```text
Open to internships and full-time roles
```


WHY: Names the engineering work and next action directly. A100 training is supported by the resume; FAISS replaces the unsupported 15ms claim.


BEFORE:

```text
Building systems with taste, speed, and signal.
```


AFTER:

```text
AI search. Model training. Full-stack software.
```


WHY: Names the engineering work and next action directly. A100 training is supported by the resume; FAISS replaces the unsupported 15ms claim.


BEFORE:

```text
I am Kashyap Hegde Kota, a computer science student and full-stack
            builder turning AI, cloud infrastructure, and product craft into fast
            interfaces that feel alive.
```


AFTER:

```text
I&apos;m Kashyap Hegde Kota, a computer science student and AI product
            engineer. I build search tools, train models, and develop web apps
            and cloud services.
```


WHY: Names the engineering work and next action directly. A100 training is supported by the resume; FAISS replaces the unsupported 15ms claim.


BEFORE:

```text
Explore Work
```


AFTER:

```text
View Projects
```


WHY: Names the engineering work and next action directly. A100 training is supported by the resume; FAISS replaces the unsupported 15ms claim.


## website/src/components/Navbar.js


BEFORE:

```text
Creative Engineer
```


AFTER:

```text
AI Product Engineer
```


WHY: Uses the established AI product engineer identity consistently.


## website/src/components/Projects.js


BEFORE:

```text
Selected systems
```


AFTER:

```text
Selected projects
```


WHY: Names the featured projects and available ways to inspect them instead of describing abstract qualities.


BEFORE:

```text
Work that moves from model to interface.
```


AFTER:

```text
Search, simulation, and image captioning.
```


WHY: Names the featured projects and available ways to inspect them instead of describing abstract qualities.


BEFORE:

```text
A mix of AI infrastructure, serverless products, and expressive web
            apps built with an eye for speed, clarity, and small details.
```


AFTER:

```text
Research paper search, F1 freight emissions, and image captioning,
            with source code and live apps to explore.
```


WHY: Names the featured projects and available ways to inspect them instead of describing abstract qualities.


## website/src/content/blog/portfolio-interface-principles.mdx


BEFORE:

```text
description: "The design rules behind this dark-mode portfolio: restraint, motion with purpose, and cards that earn their glow."
```


AFTER:

```text
description: "The rules behind this dark-mode portfolio: readable project cards, motion that helps navigation, and color that indicates state."
```


WHY: Keeps the personal design rationale while describing navigation, readability, and state instead of poetic metaphors.


BEFORE:

```text
This portfolio is designed as a working surface rather than a static gallery. It
uses motion, glass, and dense project cards, but the intent is to keep the work
legible first.
```


AFTER:

```text
I used motion, glass, and dense project cards in this portfolio. My first
priority was keeping the projects readable, with technical details and links
easy to find.
```


WHY: Keeps the personal design rationale while describing navigation, readability, and state instead of poetic metaphors.


BEFORE:

```text
2. Make every glow semantic: live state, active section, or focused action.
3. Let typography carry the voice before decoration does.
4. Keep project metadata close to the artifact.
```


AFTER:

```text
2. Use glow to indicate a live state, active section, or focused action.
3. Use typography to establish hierarchy before adding decoration.
4. Keep project metadata next to its preview.
```


WHY: Keeps the personal design rationale while describing navigation, readability, and state instead of poetic metaphors.


BEFORE:

```text
Most transitions use spring physics because they feel responsive without needing
long timelines. A small number of persistent motions, like the marquee and scroll
indicator, give the page a pulse.
```


AFTER:

```text
I used spring physics for responsive transitions without long animation
sequences. The marquee and scroll indicator added continuous motion.
```


WHY: Keeps the personal design rationale while describing navigation, readability, and state instead of poetic metaphors.


BEFORE:

```text
The best interaction layer is the one that makes the portfolio feel awake while
still letting the projects do the talking.
```


AFTER:

```text
My rule: motion should help someone navigate the portfolio without making
the projects harder to read.
```


WHY: Keeps the personal design rationale while describing navigation, readability, and state instead of poetic metaphors.


## website/src/content/blog/semantic-search-build-log.mdx


BEFORE:

```text
description: "A short architecture note on turning dense embeddings, FAISS indexes, and a clean interface into a research discovery loop."
```


AFTER:

```text
description: "How I built research paper search with dense embeddings, FAISS indexes, FastAPI, and Next.js."
```


WHY: Keeps the architecture, future ideas, and personal lesson; replaces anthropomorphism and vague metaphors with concrete search behavior.


BEFORE:

```text
Semantic search gets interesting when the product stops feeling like a database
and starts feeling like a collaborator. The research paper discovery platform
was built around that idea: query by meaning, surface the strongest matches, and
make the path from question to paper feel immediate.
```


AFTER:

```text
I built the research paper discovery platform to search papers by meaning.
The goal was straightforward: enter a question, find relevant matches, and
open a paper without extra steps.
```


WHY: Keeps the architecture, future ideas, and personal lesson; replaces anthropomorphism and vague metaphors with concrete search behavior.


BEFORE:

```text
## System Shape
```


AFTER:

```text
## Search Pipeline
```


WHY: Keeps the architecture, future ideas, and personal lesson; replaces anthropomorphism and vague metaphors with concrete search behavior.


BEFORE:

```text
The core loop is intentionally small:
```


AFTER:

```text
The search pipeline has four steps:
```


WHY: Keeps the architecture, future ideas, and personal lesson; replaces anthropomorphism and vague metaphors with concrete search behavior.


BEFORE:

```text
That shape kept the product understandable while leaving room for better ranking,
```


AFTER:

```text
This structure kept the system understandable while leaving room for better ranking,
```


WHY: Keeps the architecture, future ideas, and personal lesson; replaces anthropomorphism and vague metaphors with concrete search behavior.


BEFORE:

```text
The frontend needed to communicate confidence without becoming noisy. The result
cards prioritize title, abstract signal, and immediate external actions. Search
feels fast because the interface avoids visual churn between request and result.
```


AFTER:

```text
I wanted results to be easy to scan. The cards prioritize paper titles,
abstracts, and links to the papers. The interface avoids unnecessary visual
changes while a search request is in progress.
```


WHY: Keeps the architecture, future ideas, and personal lesson; replaces anthropomorphism and vague metaphors with concrete search behavior.


BEFORE:

```text
The lesson: search products live or die by the gap between a user's language and
the system's representation of intent.
```


AFTER:

```text
My takeaway: retrieving nearby vectors is only part of the job. The harder
question is whether the returned papers answer what the user meant to ask.
```


WHY: Keeps the architecture, future ideas, and personal lesson; replaces anthropomorphism and vague metaphors with concrete search behavior.


## website/src/content/blog/serverless-product-polish.mdx


BEFORE:

```text
description: "Notes on making AWS Lambda, API Gateway, and a modern frontend feel like a cohesive product instead of a collection of services."
```


AFTER:

```text
description: "Notes on AWS Lambda, API Gateway, and the loading states and API decisions behind my serverless apps."
```


WHY: Preserves backend and interface decisions while explaining cold starts, loading, and user feedback directly.


BEFORE:

```text
Serverless architecture is most useful when the user never notices it. The F1
carbon emissions calculator and the episode recommender both benefited from the
same discipline: keep cold paths lean, make data access predictable, and spend
the saved complexity budget on the interface.
```


AFTER:

```text
The F1 carbon emissions calculator and episode recommender raised similar
questions: how much work happens on a cold start, how data is fetched, and what
the user sees while waiting. I focused on keeping cold-start paths small,
data access predictable, and the interface clear.
```


WHY: Preserves backend and interface decisions while explaining cold starts, loading, and user feedback directly.


BEFORE:

```text
Good constraints turned into better product choices:
```


AFTER:

```text
These were the constraints I worked with:
```


WHY: Preserves backend and interface decisions while explaining cold starts, loading, and user feedback directly.


BEFORE:

```text
## Product Texture
```


AFTER:

```text
## Loading and Interaction States
```


WHY: Preserves backend and interface decisions while explaining cold starts, loading, and user feedback directly.


BEFORE:

```text
The UI work mattered as much as the backend. Empty states, hover states, loading
transitions, and copy all helped the products feel intentional instead of
assembled.
```


AFTER:

```text
I worked on empty states, hover feedback, loading transitions, and copy
alongside the backend. Those details help explain what the app is doing
and what the user can do next.
```


WHY: Preserves backend and interface decisions while explaining cold starts, loading, and user feedback directly.


BEFORE:

```text
> The architecture is doing its job when the interface feels calm.
```


AFTER:

```text
> A loading state should tell me what's happening while the backend responds.
```


WHY: Preserves backend and interface decisions while explaining cold starts, loading, and user feedback directly.


BEFORE:

```text
That is the thread I want to keep following across cloud-heavy products.
```


AFTER:

```text
That's a rule I want to keep using in future cloud projects.
```


WHY: Preserves backend and interface decisions while explaining cold starts, loading, and user feedback directly.


## website/src/data/projects.js


BEFORE:

```text
"Semantic research discovery for CS.AI, CS.LG, and CS.CL papers using Sentence-Transformers, FAISS, FastAPI, and a polished Next.js frontend.",
```


AFTER:

```text
"Search CS.AI, CS.LG, and CS.CL papers by meaning. Built with Sentence-Transformers, FAISS, FastAPI, and Next.js, with 250K+ arXiv papers indexed.",
```


WHY: States the task and implementation using existing project facts; removes promotional adjectives and explains vague terminology.


BEFORE:

```text
"Cloud-native freight logistics simulation with FastAPI on AWS Lambda, DynamoDB geospatial lookups, and real-time environmental impact visualizations.",
```


AFTER:

```text
"Simulate freight emissions for the 2026 F1 season. FastAPI runs on AWS Lambda, with DynamoDB geospatial lookups and real-time emissions visualizations.",
```


WHY: States the task and implementation using existing project facts; removes promotional adjectives and explains vague terminology.


BEFORE:

```text
eyebrow: "Playful Product",
```


AFTER:

```text
eyebrow: "Episode Recommendations",
```


WHY: States the task and implementation using existing project facts; removes promotional adjectives and explains vague terminology.


BEFORE:

```text
metric: "8 mood paths",
```


AFTER:

```text
metric: "8 moods",
```


WHY: States the task and implementation using existing project facts; removes promotional adjectives and explains vague terminology.


BEFORE:

```text
"A mood-aware recommendation app built with React and an AWS serverless backend, tuned for fast choices and polished microinteractions.",
```


AFTER:

```text
"Pick a Family Guy episode based on one of eight moods. Built with React and an AWS serverless backend, with interactive feedback as you choose.",
```


WHY: States the task and implementation using existing project facts; removes promotional adjectives and explains vague terminology.


BEFORE:

```text
"A Socratic algorithm co-pilot powered by a custom Code-Vision model, multimodal scraped datasets, and an MLOps training pipeline.",
```


AFTER:

```text
"An algorithm tutor that guides users with questions, using a custom Code-Vision model, scraped multimodal datasets, and an MLOps training pipeline.",
```


WHY: States the task and implementation using existing project facts; removes promotional adjectives and explains vague terminology.


BEFORE:

```text
"A responsive weather app with city autocomplete, OpenWeatherMap integration, and a clean interface for fast daily decisions.",
```


AFTER:

```text
"Look up weather forecasts with city autocomplete and OpenWeatherMap integration in a responsive web app.",
```


WHY: States the task and implementation using existing project facts; removes promotional adjectives and explains vague terminology.
