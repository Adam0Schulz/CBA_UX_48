## Braindump
- FOG hardware rental app
- frustrations
	- lack of information about available tools
	- unclear pricing and terms
	- no digital booking options
	- uncertainty about item availability
- task: design an app to improve the experience
- required features: 
	- browsing available equipment
	- equipment descriptions and photos
	- real-time availability status
	- online booking and payment
	- personalized recommendations
	- filters by category or skill level
	- maintenance and safety instructions
	- sustainability tracking 
	- customer reviews
- how do i imagine it:
	- something like an eshop just for renting
	- have a catalogue as on an eshop
	- have a detail page as on an eshop
	- on detail there would be the information about that tool and availability status
	- customers should be able to create a profile
	- if a customer doesn't have a profile then they should provide contact information (and if they don't return the equipment fines will be automatically taken from the account)
	- pages:
		- list of equipment (with filters for available and unavailable - should say when they will become available)
		- profile page with customizable information
		- detail page with specific equipment information (on usage and specification, photos, description, video guides)
		- checkout flow - group of pages (no cart just checkout for each equipment)
		- home page - current rentals, recommendations, start new booking
		- guides and instructions page / rental terms
		- login/register page
		- error pages
		- sustainability and transparency page - shows the enviro impact of sharing
		- ???? maybe a pick up screen as on **too good to go** ????
	- when a mobile app it should have notifications (reminders of rental end) if a web-based system then email reminders
	- 


## Empathy map

### 🧩 Empathy Map: Brian Bæk

####  **Says** (direct quotes he might say aloud)

- _“I hope they actually have the drill in stock when I get there.”_
- _“Why can’t I just book and pay online instead of filling out all this paperwork?”_
- _“I don’t want to buy a tool I’ll only use once.”_
- _“I need clear instructions so I don’t mess this up.”_
- _“Late fees are so annoying—I wish I got a reminder.”_

#### **Thinks** (internal thoughts, not always spoken)

- _“If the tool isn’t available, my whole weekend project is ruined.”_
- _“Am I getting the right tool for this job? Maybe I should double-check specs.”_
- _“The rental process is so annoying.”_
- _“I don’t want to feel stupid asking for help in the store.”_
- _“If I damage the tool, what will it cost me?”_

#### **Feels** (emotional drivers)

- Frustrated when availability is uncertain.
- Anxious about using unfamiliar equipment safely.
- Proud when a project turns out well.
- Annoyed by extra time spent on paperwork.

#### **Does** (behaviors & actions)

- Browses FOG’s website or calls ahead to check tool availability.
- Compares buying vs. renting, but usually rents.
- Reads or watches DIY tutorials online.
- Plans weekend projects in advance.
- Picks up tools at the store, often waits in line, and sometimes discovers the tool is unavailable — forcing him to waste time going to a different store.
- Usually returns tools right at the deadline, but occasionally misses it.


# --- 
## Problem statement

“FOG’s customers face uncertainty about tool availability, a slow rental process, and unclear usage guidance. A digital rental solution with real-time availability, online booking & payment, and accessible safety instructions will make planning and completing DIY projects simple and efficient.”

# ---
## User journey map

### Persona Going Through This Journey

**Brian Bæk, 38** – DIY weekend renovator. Values **planning, clarity, and efficiency**, but struggles with **uncertain availability, slow rental process, and unclear safety info**.

### Expectations (before starting)

- “The tool I need will be available when I get there.”
- “The process should be quick — I just want to get my tool and start my project.”
- “They’ll help me if I’m unsure about specs or usage.”

### Stages & Actions

**1. Planning the Project**

- 1.1 Identifies the tools needed for his weekend DIY project.
- 1.2 Checks FOG’s website or calls the store for availability (information is unclear). **(Emotional rating: 2 — frustrated by uncertainty)**

**2. Visiting the Store**

- 2.1 Drives to the store, expecting to pick up the tool.
- 2.2 Waits in line to speak with staff. **(Emotional rating: 2 — impatient)**
- 2.3 Learns the tool is unavailable → must go to another store or delay project. **(Emotional rating: 1 — very frustrated, wasted time)**
    

**3. Rental Process**

- 3.1 Fills out paperwork and reviews rental terms at the counter. **(Emotional rating: 2 — time-consuming, unclear terms)**
- 3.2 Finally pays at the desk (no online option).

**4. Using the Tool**

- 4.1 Takes the tool home.
- 4.2 Struggles with unclear instructions and looks for YouTube tutorials. **(Emotional rating: 2 — anxious, unsure about safety)**

**5. Returning the Tool**

- 5.1 Uses the tool until just before the deadline.
- 5.2 Returns it at the store, sometimes missing the deadline and paying late fees. **(Emotional rating: 1 — frustrated, feels punished)**

### Opportunities

- Show **real-time availability** online to reduce wasted trips.
- Provide **online booking and payment** to save time in-store.
- Offer **clear, quick usage guides** (video/text) for safe, confident tool use.
- Send **return reminders** to avoid late fees and frustration.

# ---
## User interview (Via a questionnaire)
### 📝 Introduction (for Google Form intro text)

_Hello, and thank you for helping me with my UX research project. I’m exploring how people rent equipment (like drills, saws, or garden machines) and what challenges they face with the process today. Your answers will help me understand the current experience, identify frustrations, and explore what a digital solution could improve. The survey takes about 3 minutes. All responses are anonymous and only used for this school project._

---

### 5 Key Open-ended Questions

1. Can you describe the last time you rented equipment — what went well and what didn’t?
2. What is the most frustrating part of renting equipment for you?
3. How do you usually check if the tool you need is available?
4. If you could change one thing about the rental process, what would it be?
5. Imagine there was an app or website for renting equipment — what features would be most valuable to you?

# ---
## Desk research
- competition
	- silvan
	- loxam
	- bauhaus
	- renta group
- competition that offers tool rental services
	- silvan
		- wide selection
		- fixed time windows (4 hours, 1 day, 3 days, 1 week)
		- specification listed
		- description listed
		- instructions listed (user guide, user manual) in form of a pdf
		- product/instructional videos - tips with just text no speach
		- difficult to find the terms of rental
		- ![[Pasted image 20250818131823.png]]
		- ![[Pasted image 20250818131828.png]]
		- ![[Pasted image 20250818131832.png]]

| **Overly Digital-Only Rental Flow** | In-store staff unable to assist with rentals; customers redirected to the website. |
| ----------------------------------- | ---------------------------------------------------------------------------------- |

| **Poor Wayfinding & Signage** | Customers report difficulty locating service counters like Click & Collect. |
| ----------------------------- | --------------------------------------------------------------------------- |

| **Hidden or Incomplete Pricing Info** | Consumables and extras often not included or unclear at booking time. |
| ------------------------------------- | --------------------------------------------------------------------- |

| **Lack of Real-Time Availability Info** | Site does not display current stock levels per store, risking wasted trips. |
| --------------------------------------- | --------------------------------------------------------------------------- |

#### Loxam
- no video on their site
- little guide information
- ![[Pasted image 20250818131945.png]]
- 


| **Incomplete Pricing** | Base price excludes transport and consumables, revealed later in checkout. |
| ---------------------- | -------------------------------------------------------------------------- |

| **Unexpected Extra Costs** | Risk surcharges, cleaning, consumables added last-minute. |
| -------------------------- | --------------------------------------------------------- |

| **Equipment Reliability** | Equipment sometimes faulty or reserved incorrectly. |
| ------------------------- | --------------------------------------------------- |

| **Customer Communication Gaps** | Slow responses, billing disputes, perception of unprofessional support. |
| ------------------------------- | ----------------------------------------------------------------------- |
# ---
## Prioritization matrix

### Features
- catalogue of equipment
- filters for availability
- filters for skill level
- search through the catalogue
- real-time availability status
- equipment photos, descriptions, specifications, manuals, safety instructions and video guides
- online booking and payment
- customer reviews
- sustainability page
- profile page
- recommendations
- easy to find terms of rental
- clear pricing
- instead of showing unavailable on a tool show when it is going to be available again
- home page with current rentals and reminders to return the equipment, recommendations
- login page
- digital receipts
- email reminders before the end of rental

### 🗂 Revised Prioritization Matrix

#### **Big Bets** (High Value, High Effort)

- Real-time availability status
- Online booking and payment
- Equipment photos, descriptions, manuals, safety instructions, and video guides
- Multi-language support
- Dark mode (by default)

---

#### **Low-hanging Fruits** (High Value, Low Effort)

- Catalogue of equipment
- Filters (availability, skill level)
- Search through the catalogue
- Easy-to-find terms of rental
- Clear pricing
- Show next availability instead of “unavailable”
- Email reminders before the end of rental
- Digital receipts

---

#### **Not Worth It** (Low Value, High Effort)

- Gamification / “badges” for frequent renters (fun but adds complexity, little real value)
- Advanced AI recommendations (effort-heavy, not critical early on)
- Augmented Reality “preview tool use” (overkill for MVP)
- Deep personalization (e.g., tracking all past projects to auto-suggest tools — nice, but heavy lift)

---

#### **Maybes** (Low Value, Low Effort)

- Customer reviews (nice trust signal, but not essential early)
- Sustainability page
- Profile page (can be very minimal at MVP)
- Home page/dashboard (could be merged into catalogue + reminders)
- Login page (guest checkout may be enough for MVP)
# ---
## UX sustainability canvas

### 🌱 Sustainable UX Canvas – FOG Equipment Rental App

#### **E – Environmental Sustainability**

**Visible Design (UI)**

- Dark mode by default → reduces energy use on OLED devices.
- Lightweight visuals → use images over video where possible; avoid autoplay.
- Clear CO₂ impact nudges → “Renting saves X kg CO₂ compared to buying.”
- Show sustainability tips in context (e.g., “Return on time = reduces need for extra production”).

**Invisible Design (Technical)**

- Green hosting provider for app infrastructure.
- Minified & optimized code to reduce load and energy waste.
- Lazy loading for photos/videos of tools.
- Caching & local storage for frequently viewed items (catalogue).
- Optimized image formats (WebP, SVG).

---

#### **S – Social Sustainability**

**Accessibility & Inclusion**

- WCAG-compliant: high contrast, alt text, semantic HTML.
- Multi-language support for Denmark’s diverse population.
- Works on older/low-performance devices (Brian might be on budget phones).

**Ethical UX & Behavior**

- Avoid dark patterns in booking (no hidden fees).
- Clear, upfront pricing and rental terms.
- Responsible nudges → return reminders (no guilt, just helpful).

**Equity & Representation**

- Gender-neutral language in onboarding/profile.
- Diverse imagery in promotional visuals (not just “handy men”).
- Consider inclusive instructions (visual + text + video guides).

**Digital Balance**

- Limit notifications to essentials (reminders, confirmations).
- No infinite scrolling catalogue — structured browsing instead.

---

#### **G – Governance (Ethics & Strategy)**

- **Strategic Anchoring:** Sustainability (tool sharing > buying) positioned as a core business value.
- **Ethical Guidelines:** Internal design principle → “No hidden costs, no manipulative upselling.”
- **Authority for Designers:** UX team empowered to choose greener defaults (dark mode, caching, sustainable nudges).
- **Measurement:** Regularly test app with Ecograder / Website Carbon to monitor footprint.
- **Transparency:** Communicate sustainability metrics to users (paperless receipts, CO₂ savings, shared tool lifespan).

# ---
## User flows
![[Pasted image 20250818143726.png]]
![[Pasted image 20250818143717.png]]
![[Pasted image 20250818143701.png]]

### User stories
- As a weekend renovator, I want to see real-time availability and book a tool online, so I can plan my project without delays
- As a DIY enthusiast, I want to access quick video guides and safety instructions, so I can use tools safely and effectively.
- As a planner, I want to receive reminders before my rental ends, so I can return the tool on time and avoid late fees.
