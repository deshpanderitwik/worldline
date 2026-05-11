// A "topic" in the registry. Most are equations (with `tex`); some are
// prose-only deep dives reachable from inline `<a class="eq-ref" data-eq="…">`
// references.
export type Equation = {
  id: string;
  tex?: string;
  display?: boolean;
  detail?: {
    title: string;
    html: string;
  };
  // Hover tooltip — three sections, mirroring the llm-deep-dive pattern.
  // The `symbols` and `context` strings may contain inline $…$ math.
  tooltip?: {
    pronunciation: string;
    symbols: string;
    context: string;
  };
};

const nowDetail = `
<p class="lead">The equation has two parts doing different work.</p>

<h3>$t_0 \\in T$ &mdash; the banal half</h3>
<p>
  The present is a moment, an element of the time line, no different
  ontologically from any other moment. This is what keeps proposition 4.3
  consistent with 4.1.
</p>

<h3>$t_0 = t_0(i)$ &mdash; the loaded half</h3>
<p>
  $t_0$ is a function of $i$. The present depends on who is asking. There is
  no $t_0$ floating free in $T$; there is only ever $t_0$-of-some-questioner.
  Different $i$, different $t_0$.
</p>

<p>
  The math is encoding a specific philosophical claim: the present is
  <em>indexical</em>. Like &ldquo;here,&rdquo; &ldquo;this,&rdquo;
  &ldquo;I&rdquo; &mdash; terms whose referent shifts with who utters them
  &mdash; &ldquo;now&rdquo; has no fixed value in $w$; it is a function from
  observers to moments.
</p>

<h3>What this captures</h3>
<dl>
  <dt>No universal now.</dt>
  <dd>
    Special relativity says exactly this &mdash; different observers&rsquo;
    &ldquo;now&rdquo;s genuinely disagree, and physics treats none as
    privileged. $t_0(i)$ vs. $t_0(j)$ is the formal handle.
  </dd>
  <dt>The present is a relation, not a thing.</dt>
  <dd>
    It lives between $T$ (the dimension) and $i$ (the worldline). Remove
    either side and there is no $t_0$.
  </dd>
  <dt>It is humble.</dt>
  <dd>
    The equation declares the existence of $t_0$ and its dependence on $i$;
    it does not say what that function is. The value is whatever moment $i$
    is empirically passing through.
  </dd>
</dl>

<h3>What this does not capture</h3>
<dl>
  <dt>Thickness.</dt>
  <dd>
    $t_0$ as written is a point.
    <a class="eq-ref" data-eq="thick-now">4.5 then thickens it to
    $[t_0 - \\delta,\\; t_0 + \\delta]$</a> &mdash; the lived now has
    duration.
  </dd>
  <dt>Flow.</dt>
  <dd>
    The equation is a snapshot. $t_0$ advances as $i$ traverses its
    worldline, but the formula does not show motion. The advance is built
    into $i$ being a worldline rather than a point.
  </dd>
  <dt>Felt realness.</dt>
  <dd>
    The equation says $t_0$ is one moment among many; it does not say why
    $i$ experiences this one as uniquely real. That is the move from
    B-series (geometry) to A-series (biography), and the math here marks
    where the bridge needs to go.
  </dd>
</dl>

<p class="aside-detail">
  The present, in this minimal structural form: <em>whatever moment a
  worldline is currently at, full stop.</em> Thickness, flow, and
  felt-realness are what the surrounding propositions layer back on.
</p>
`;

export const equations: Record<string, Equation> = {
  domain: {
    id: "domain",
    tex: "x \\in D",
    display: false,
    tooltip: {
      pronunciation: "x is in D",
      symbols:
        "$x$ is a variable; $\\in$ is set membership; $D$ is the domain it ranges over.",
      context:
        "An ordinary mathematical variable, shown as a foil. $w$ is not a variable in this sense — it has no domain outside itself.",
    },
  },
  self: {
    id: "self",
    tex: "w \\in w",
    tooltip: {
      pronunciation: "w is in w",
      symbols: "$w$ is the world; $\\in$ is set membership.",
      context:
        "$w$ contains itself. The world includes the symbol naming it, this document, and the act of containing.",
    },
  },
  subset: {
    id: "subset",
    tex: "\\forall x,\\ x \\in w",
    tooltip: {
      pronunciation: "for all x, x is in w",
      symbols:
        "$\\forall$ means &ldquo;for all&rdquo;; the statement says every entity is an element of $w$.",
      context:
        "$w$ is the universal domain. Every other variable in this document ranges over some subset of $w$.",
    },
  },
  map: {
    id: "map",
    tex: "\\ulcorner w \\urcorner \\neq w",
    tooltip: {
      pronunciation: "the name of w is not w",
      symbols:
        "$\\ulcorner \\cdot \\urcorner$ are Quine corners, marking &ldquo;mention&rdquo; rather than &ldquo;use&rdquo;; $\\neq$ means &ldquo;is not equal to.&rdquo;",
      context:
        "The symbol $w$ is not the world it names. The map is not the territory.",
    },
  },
  "i-in-w": {
    id: "i-in-w",
    tex: "i \\in w",
    tooltip: {
      pronunciation: "i is in w",
      symbols:
        "$i$ is the questioner (you); $\\in$ is set membership; $w$ is the world.",
      context:
        "The questioner is embedded in the world, not standing outside it. There is no neutral vantage.",
    },
  },
  "i-proper": {
    id: "i-proper",
    tex: "i \\subsetneq w",
    tooltip: {
      pronunciation: "i is a proper subset of w",
      symbols:
        "$\\subsetneq$ means &ldquo;is contained in, but not equal to.&rdquo;",
      context:
        "$i$ is part of $w$, but only a small part. Most of $w$ is not $i$.",
    },
  },
  worldline: {
    id: "worldline",
    tex: "i : T \\to w, \\quad t \\mapsto i(t)",
    tooltip: {
      pronunciation: "i, from T to w; t maps to i of t",
      symbols:
        "$i : T \\to w$ defines $i$ as a function from time into the world; $t \\mapsto i(t)$ says that at moment $t$, $i$ is at the point $i(t)$ in $w$.",
      context:
        "The questioner is not a point but a trajectory — a worldline through $w$, indexed by time.",
    },
  },
  recursive: {
    id: "recursive",
    tex: "i \\in w \\;\\Rightarrow\\; i \\in M \\;\\Rightarrow\\; M_i \\in M \\;\\Rightarrow\\; \\ldots",
    tooltip: {
      pronunciation:
        "i in w implies i in M implies the model of i in M, and so on",
      symbols:
        "$\\Rightarrow$ means &ldquo;implies&rdquo;; $M$ is any model of $w$; $M_i$ is the model of $i$ within $M$.",
      context:
        "Any model of the world must contain the modeller, hence a model of the modeller, recursing forever.",
    },
  },
  imaginary: {
    id: "imaginary",
    tex: "i^2 = -1",
    display: false,
    tooltip: {
      pronunciation: "i squared equals negative one",
      symbols:
        "$i$ here is the imaginary unit of algebra (not the questioner).",
      context:
        "The borrowed symbol. The imaginary unit cannot be located on the real number line, yet without it the algebra of the real does not close. So too the questioner.",
    },
  },
  "T-line": {
    id: "T-line",
    tex: "T \\cong \\mathbb{R}, \\quad i : T \\to w",
    tooltip: {
      pronunciation:
        "T is isomorphic to the real numbers; i is a function from T to w",
      symbols:
        "$T$ is time; $\\cong$ means &ldquo;is isomorphic to&rdquo; (has the same structure as); $\\mathbb{R}$ is the real number line.",
      context:
        "Time is modelled as the real number line. The questioner is parameterized by points $t \\in T$.",
    },
  },
  arrow: {
    id: "arrow",
    tex: "\\frac{dS}{dt} \\;\\geq\\; 0",
    tooltip: {
      pronunciation: "d S by d t is greater than or equal to zero",
      symbols:
        "$dS/dt$ is the rate at which entropy changes with time; $\\geq 0$ means it is non-negative.",
      context:
        "The Second Law of thermodynamics. Entropy never decreases — this is what gives time its arrow.",
    },
  },
  now: {
    id: "now",
    tex: "t_0 \\in T, \\quad t_0 = t_0(i)",
    tooltip: {
      pronunciation: "t-naught is in T; t-naught is a function of i",
      symbols:
        "$t_0$ is the present moment; the equation says it is a function of $i$, the questioner.",
      context:
        "The &ldquo;now&rdquo; is not a feature of $T$ but of $i$&rsquo;s position on its worldline. Different observers, different $t_0$.",
    },
    detail: {
      title: "The present, mathematically",
      html: nowDetail,
    },
  },
  "thick-now": {
    id: "thick-now",
    tex: "\\text{now}_i \\;=\\; [\\,t_0 - \\delta,\\; t_0 + \\delta\\,]",
    tooltip: {
      pronunciation:
        "now sub i equals the closed interval from t-naught minus delta to t-naught plus delta",
      symbols:
        "$\\text{now}_i$ is $i$&rsquo;s lived present; $\\delta$ is its half-width.",
      context:
        "The lived present is not a point but a thin interval. Retention behind, protention ahead, with $\\delta$ as the radius.",
    },
    detail: {
      title: "The thickness of now",
      html: `
<p class="lead">
  $\\delta$ is the half-width of the lived present. It is not a feature of
  $T$ &mdash; $T$ has no thickness, each $t$ is dimensionless. It is a
  parameter of $i$: how much of $T$ around $t_0$ is integrated by the
  worldline as &ldquo;happening now.&rdquo;
</p>

<h3>Why the present has thickness at all</h3>
<p>
  Perception is not instantaneous. A heard melody is melody only because
  the just-passed notes are still ringing in awareness while the new note
  arrives. A spoken sentence is a sentence only because the words behind
  you are still present enough to combine with the words in front. Take
  that thickness away and music becomes a sequence of disconnected tones;
  speech becomes phonemes without meaning.
</p>
<p>
  Husserl named the two faces of this thickness:
</p>
<dl>
  <dt>Retention.</dt>
  <dd>
    The just-passed, still held. Not memory &mdash; memory is a separate
    operation. Retention is the freshness of the note that ended a moment
    ago, which has not yet sunk into past-tense.
  </dd>
  <dt>Protention.</dt>
  <dd>
    The just-coming, already half-anticipated. Not prediction &mdash;
    prediction is deliberate. Protention is the leaning of the body toward
    the next syllable, the next chord, the next step.
  </dd>
</dl>
<p>
  Retention behind, protention ahead, the now in the middle: this is the
  shape of the lived present. $\\delta$ is the radius.
</p>

<h3>How thick is now?</h3>
<p>
  $\\delta$ is not a single number. Different cognitive operations have
  different integration windows:
</p>
<dl>
  <dt>$\\sim$100 ms &mdash; sensory binding.</dt>
  <dd>
    Two flashes or clicks within about 100 milliseconds are perceived as
    simultaneous; beyond, as sequential. This is the floor: under 100 ms,
    distinct events are not separable in experience.
  </dd>
  <dt>$\\sim$300 ms &mdash; phonemic integration.</dt>
  <dd>
    The window in which a sound is bound into the syllable or word it
    belongs to.
  </dd>
  <dt>$\\sim$2&ndash;3 s &mdash; the &ldquo;moment of nowness.&rdquo;</dt>
  <dd>
    The classical specious present (William James, 1890). Roughly the
    duration of a phrase of music, a line of poetry, a single intentional
    act. Inside this window, events are experienced as part of one
    ongoing happening; outside it, they have already become past, or
    have not yet arrived.
  </dd>
  <dt>$\\sim$30 s &mdash; working-memory present.</dt>
  <dd>
    The longer integration in which a thought, a paragraph, a
    conversation feels current rather than remembered.
  </dd>
</dl>
<p>
  So $\\delta$ is scale-dependent: the present that counts as
  &ldquo;now&rdquo; for rhythm is not the same as the present that counts
  as &ldquo;now&rdquo; for reasoning. The same worldline carries several
  $\\delta$s at once, layered.
</p>

<h3>Where does the present stop being the present?</h3>
<p>
  The boundary is not sharp. Retention fades into memory continuously, not
  by crossing a line. The just-passed chord is, gradually, less present
  and more remembered &mdash; over a few hundred milliseconds it
  transitions from <em>part of the music</em> to <em>recently heard
  music</em> to <em>music heard a moment ago</em>.
</p>
<p>
  The clean interval $[t_0 - \\delta,\\; t_0 + \\delta]$ in 4.5 is a useful
  idealization. The actual shape is closer to a smooth window function: a
  high plateau around $t_0$ with edges that fall off, not a hard wall.
  Define the boundary, if you must, as where the contribution of a moment
  to the experienced present has decayed to (say) half its maximum &mdash;
  a half-life of nowness.
</p>

<h3>$\\delta$ varies</h3>
<p>
  Different observers, different states, different $\\delta$:
</p>
<dl>
  <dt>Flow and meditation.</dt>
  <dd>
    Practice in attending widens $\\delta$ &mdash; the integration window
    stretches, more is bound into one moment.
  </dd>
  <dt>Stress and trauma.</dt>
  <dd>
    Time can both dilate (a crash takes &ldquo;forever&rdquo;) and
    contract (whole episodes lost). The integration becomes uneven.
  </dd>
  <dt>Distraction and illness.</dt>
  <dd>
    $\\delta$ shrinks. Things that should be bound together feel
    disjointed; sentences slip; music does not cohere.
  </dd>
  <dt>Training.</dt>
  <dd>
    Musicians develop finer temporal resolution at the lower bound; chess
    players develop wider integration at the upper bound. Both directions
    are trainable.
  </dd>
  <dt>Aging.</dt>
  <dd>
    The integration windows tend to broaden in some respects (slower
    sensory binding) and narrow in others (smaller working-memory
    present).
  </dd>
</dl>

<h3>What if $\\delta = 0$?</h3>
<p>
  A worldline with no thickness would be a sequence of disconnected
  instants. No music, no speech, no continuity of action, no felt
  unfolding. $\\delta$ is what makes the difference between <em>being in
  the moment</em> and merely <em>having a series of moments</em>. It is
  what binds $T$ into a present, and the present into a life.
</p>

<p class="aside-detail">
  The body sets the lower bound. Heartbeat, breath, gait &mdash; these
  intrinsic rhythms organize how $i$ integrates time. Tend the body and
  $\\delta$ sharpens; lose the body and $\\delta$ collapses, reducing
  $i$ to disconnected points on $T$.
</p>
`,
    },
  },
  series: {
    id: "series",
    tex: "\\underbrace{t_1 < t_2}_{\\text{B-series, intrinsic}} \\quad\\vert\\quad \\underbrace{\\text{past} \\,\\prec\\, t_0 \\,\\prec\\, \\text{future}}_{\\text{A-series, } i\\text{-relative}}",
    tooltip: {
      pronunciation:
        "t-one before t-two; past before t-naught before future",
      symbols:
        "Two readings of $T$. The B-series uses &ldquo;earlier-than&rdquo; relations; the A-series uses past, present, future.",
      context:
        "The B-series is intrinsic to $w$ — geometry. The A-series is relative to $i$ — biography.",
    },
    detail: {
      title: "A-series and B-series",
      html: `
<p class="lead">
  A distinction from the philosopher J. M. E. McTaggart (1908). Two different
  ways of ordering events in time.
</p>

<h3>$B$-series &mdash; earlier-than / later-than</h3>
<p>
  A fixed, tenseless ordering. <em>&ldquo;1939 is before 1969.&rdquo;</em>
  True regardless of who says it or when. The B-series is a static structure
  &mdash; like a number line for time. No event is privileged; every event
  is just at its coordinate.
</p>

<h3>$A$-series &mdash; past / present / future</h3>
<p>
  A tensed ordering, anchored to a moving <em>now</em>.
  <em>&ldquo;WWII is past.&rdquo;</em>
  <em>&ldquo;I am writing this.&rdquo;</em>
  <em>&ldquo;Tomorrow it will rain.&rdquo;</em>
  Truth depends on <strong>when</strong> you say it. Yesterday, <em>&ldquo;I
  am writing this&rdquo;</em> was false. Now it is true. Tomorrow it will be
  false again. The A-series is dynamic: events flow from future, through
  present, into past, as time advances.
</p>

<h3>Same event, both series at once</h3>
<p>The 1969 moon landing is:</p>
<dl>
  <dt>B-series</dt>
  <dd>later than 1939, earlier than 2026.</dd>
  <dt>A-series</dt>
  <dd>in the past, from where $i$ is currently sitting in 2026.</dd>
</dl>
<p>
  The B-fact never changes. The A-fact changes constantly &mdash; in 1968 it
  was future, in 1969 present, since then past.
</p>

<h3>Why both matter for $w$</h3>
<dl>
  <dt>The B-series is intrinsic to $w$.</dt>
  <dd>
    It is just a fact about the structure of $T$ that one event precedes
    another. No observer required.
  </dd>
  <dt>The A-series is $i$-relative.</dt>
  <dd>
    It only makes sense from a worldline. Which moment is &ldquo;present&rdquo;
    depends on where $i$ currently is. Different observers, different
    A-series; same B-series.
  </dd>
</dl>
<p>
  This is why physics &mdash; which describes $w$ from no particular vantage
  &mdash; almost exclusively uses B-series, and why relativity of
  simultaneity is so strange when first encountered. There is no universal
  answer to <em>&ldquo;what is happening now?&rdquo;</em>; the question is
  malformed without specifying <em>for whom</em>. There is a perfectly good
  answer to <em>&ldquo;is event $X$ earlier than event $Y$?&rdquo;</em>
</p>
<p>
  The slogan, restated:
  <strong>B-series is geometry; A-series is biography.</strong>
</p>

<h3>McTaggart&rsquo;s actual argument</h3>
<p>
  Since the names come from him: he claimed the A-series is
  <em>incoherent</em> &mdash; every event has to be past <em>and</em>
  present <em>and</em> future at different times, and these are mutually
  exclusive properties. He used this to argue time itself is unreal. Almost
  no one buys the conclusion. Almost everyone kept the distinction.
</p>

<h3>Modern positions</h3>
<dl>
  <dt>Eternalism / block universe.</dt>
  <dd>
    B-series is fundamental; A-series is observer-relative appearance. What
    propositions 4.1 through 4.3 lean toward.
  </dd>
  <dt>Presentism.</dt>
  <dd>
    Only the present moment is real; A-series is fundamental, B-series a
    derived bookkeeping device.
  </dd>
  <dt>Growing block.</dt>
  <dd>Past and present are real; future is not yet. A hybrid.</dd>
</dl>

<p class="aside-detail">
  The ontology, as currently drafted, takes the eternalist line for $w$
  (the block) and reserves the A-series for what $i$&rsquo;s worldline
  produces &mdash; which is why we can hold both 4.1 (&ldquo;no <em>now</em>
  intrinsic to $w$&rdquo;) and 4.3 (&ldquo;$i$ has a <em>now</em>&rdquo;)
  without contradiction.
</p>
`,
    },
  },
  "first-law": {
    id: "first-law",
    tex: "dE_{w} \\;=\\; 0",
    tooltip: {
      pronunciation: "d E sub w equals zero",
      symbols:
        "$dE_w$ is the change in total energy of $w$ over any interval.",
      context:
        "The First Law of thermodynamics. The energy of the universe is conserved — never created or destroyed, only redistributed.",
    },
  },
  clausius: {
    id: "clausius",
    tex: "dS \\;=\\; \\frac{dQ_{\\text{rev}}}{\\Theta}",
    tooltip: {
      pronunciation: "d S equals d Q reversible over theta",
      symbols:
        "$dS$ is the change in entropy; $dQ_{\\text{rev}}$ is an infinitesimal heat exchange along a reversible path; $\\Theta$ is the absolute temperature.",
      context:
        "Clausius&rsquo;s macroscopic definition. Adding heat at temperature $\\Theta$ raises entropy by exactly $dQ/\\Theta$, in the idealized reversible limit.",
    },
    detail: {
      title: "What Clausius's equation is doing",
      html: `
<p class="lead">
  Clausius's 1865 equation does one thing: it tells you how much entropy a
  system gains or loses when heat flows in or out. Three symbols carry the
  work, and one of them &mdash; the $1/\\Theta$ factor &mdash; is where the
  deep move happens.
</p>

<h3>The symbols</h3>
<dl>
  <dt>$dS$</dt>
  <dd>
    An infinitesimal change in entropy. Units: joules per kelvin (J/K).
    The smallest book-entry the bookkeeping allows.
  </dd>
  <dt>$dQ_{\\text{rev}}$</dt>
  <dd>
    An infinitesimal amount of heat exchanged with the surroundings,
    measured along a <em>reversible</em> path &mdash; slow enough that
    the system never falls out of equilibrium. The subscript is doing
    real work; we will return to it.
  </dd>
  <dt>$\\Theta$</dt>
  <dd>
    The absolute temperature (in kelvin) at which the heat exchange
    happens. Not Celsius, not Fahrenheit &mdash; the formula only works
    if zero really is the bottom of the scale.
  </dd>
</dl>

<h3>Why divide by $\\Theta$?</h3>
<p>
  This is the move that makes the formula deep instead of arbitrary.
  Imagine adding the same drop of heat &mdash; one joule, say &mdash; to
  two different systems:
</p>
<dl>
  <dt>Hot system ($\\Theta = 1000$ K).</dt>
  <dd>
    Already a chaos of molecular motion. One more joule barely
    registers. $dS = 1/1000 = 0.001$ J/K.
  </dd>
  <dt>Cold system ($\\Theta = 1$ K).</dt>
  <dd>
    Nearly frozen, motions almost stilled. The same joule is, relatively,
    an enormous disturbance. $dS = 1/1 = 1$ J/K.
  </dd>
</dl>
<p>
  Same heat, a thousandfold difference in entropy created. The $1/\\Theta$
  factor is asking: <em>how much disorder does this heat create, given
  how ordered the system already was?</em> Hot systems are already
  disordered; a joule barely moves the needle. Cold systems are ordered;
  a joule shouts.
</p>

<h3>Why &ldquo;reversible&rdquo;?</h3>
<p>
  Real processes generate entropy beyond the heat transfer itself
  &mdash; friction, sudden expansions, mixing, anything irreversible
  contributes. Clausius's equation captures only the entropy change
  <em>associated with the heat flow</em>, in the cleanest possible case:
  the idealized limit where the system stays in equilibrium throughout.
</p>
<p>
  For any real process, the actual entropy change is <em>greater</em>:
</p>

<div class="math-tip" data-tip="second-law-inequality">

$$dS \\;\\geq\\; \\frac{dQ}{\\Theta}$$

</div>

<p>
  This inequality is what gives the Second Law its bite. The reversible
  limit is the floor; reality always overshoots. Equality is an
  unreachable ideal; every real exchange leaks more entropy than the
  formula predicts.
</p>

<h3>The historical move</h3>
<p>
  Why write it this way at all. Clausius was studying steam engines,
  trying to understand why you cannot convert all heat into work.
</p>
<p>
  The problem: heat $Q$ is <em>path-dependent</em>. Two systems that end
  in the same final state may have exchanged different amounts of heat
  to get there. Energy is conserved; heat is not. So $Q$ alone cannot
  label the state.
</p>
<p>
  Clausius noticed something remarkable: although $Q$ is path-dependent,
  the integral $\\int dQ_{\\text{rev}} / \\Theta$ taken along any reversible
  path between two states is <em>path-independent</em>. It depends only
  on the endpoints. That makes the integral a difference of values of
  some <em>state function</em> &mdash; a property of the system itself,
  not the trip.
</p>
<p>
  He named that state function $S$.
</p>

<h3>The unifying picture</h3>
<p>
  This formula was the first foothold. Boltzmann (5.2) showed that the
  $S$ Clausius defined macroscopically is the same as
  $S = k_B \\ln W$ microscopically &mdash; the logarithm of how many
  ways the system can be arranged consistently with what you can measure.
  Shannon (5.3) showed the same equation describes uncertainty in any
  probabilistic system, not just thermal ones.
</p>
<p>
  So Clausius was not just counting heat. He was counting, dimly,
  <em>missing information</em> about the microstate, in the special
  case where heat flow is the only operation changing it.
</p>

<p class="aside-detail">
  The body version. You eat food whose carbon-hydrogen bonds store
  energy in low-$S$ form (organized molecules). You exhale that energy
  as heat at body temperature ($\\Theta \\approx 310$ K) and as
  $\\text{CO}_2$. Both carry entropy away. The numerator $dQ$ is the
  energy you release; the denominator $\\Theta$ is set by your body's
  thermostat. The whole apparatus runs on the difference between
  low-$S$ intake and high-$S$ exhaust &mdash; a controlled,
  ten-trillion-cell heat engine, accounted for in exactly Clausius's
  bookkeeping.
</p>
`,
    },
  },
  boltzmann: {
    id: "boltzmann",
    tex: "S \\;=\\; k_B \\ln W",
    tooltip: {
      pronunciation: "S equals k-B times the natural log of W",
      symbols:
        "$S$ is entropy; $k_B \\approx 1.38 \\times 10^{-23}$ J/K is Boltzmann&rsquo;s constant; $W$ is the number of microstates compatible with the macrostate.",
      context:
        "Boltzmann&rsquo;s microscopic definition. Entropy is the logarithm of multiplicity. The most fundamental form.",
    },
    detail: {
      title: "Microstates, macrostates, and the observer",
      html: `
<p class="lead">
  $W$ counts the microstates compatible with a given macrostate. But
  what counts as &ldquo;the same macrostate&rdquo; depends on who is
  looking. The deepest fact about entropy is that it is, in this sense,
  observer-relative.
</p>

<h3>Two levels of description</h3>
<dl>
  <dt>Microstate.</dt>
  <dd>
    The full specification: every card's position, every molecule's
    location and velocity, every internal detail. The exact state of
    the system, with nothing left out.
  </dd>
  <dt>Macrostate.</dt>
  <dd>
    The coarse-grained label: &ldquo;shuffled,&rdquo;
    &ldquo;70&deg;C,&rdquo; &ldquo;evenly mixed,&rdquo;
    &ldquo;alive.&rdquo; What you can actually measure or distinguish.
    Many microstates fit under one macrostate, because the label is
    blind to differences below its resolution.
  </dd>
</dl>
<p>
  Boltzmann's $W$ counts how many microstates fit under a given
  macrostate. Entropy, $S = k_B \\ln W$, is the log of <em>what your
  coarse-graining is hiding from you</em>.
</p>

<h3>Why the logarithm</h3>
<p>Two reasons, one practical, one structural.</p>
<p>
  <em>Practical.</em> $W$ is unmanageable raw. For a sugar cube,
  $W \\approx 10^{10^{23}}$ &mdash; a number we cannot compute,
  compare, or even write down without scientific notation. Log
  compresses it to $\\ln W \\approx 10^{23}$: still large, but
  finite-looking enough to handle. Boltzmann was not just counting;
  he was making the count writable.
</p>
<p>
  <em>Structural.</em> Suppose two systems $A$ and $B$ are
  independent &mdash; two cups of coffee, one on the table, one in
  the next room, neither affecting the other. Considered together,
  the pair has $W_{AB} = W_A \\times W_B$ microstates: each
  arrangement of $A$ can pair with each arrangement of $B$, and
  precisely because they are independent, no pairing is ruled out.
  <em>Multiplicity multiplies.</em>
</p>
<p>
  <a class="eq-ref" data-eq="entropy-additivity">But entropy should
  <em>add</em></a>. The entropy of two coffees together ought to be
  the sum of the entropies of each &mdash; doubling the system
  doubles the entropy, not squares it. Take the log and the
  multiplicative structure becomes additive:
</p>

<a class="eq-link" data-eq="log-of-product" data-tip="log-of-product">

$$\\ln(W_A \\, W_B) \\;=\\; \\ln W_A + \\ln W_B$$

</a>

<p>which gives entropy its key property:</p>

<div class="math-tip" data-tip="extensivity">

$$S_{AB} \\;=\\; S_A + S_B$$

</div>

<p>
  This is called <em>extensivity</em>, and it is what we intuitively
  expect of any thermodynamic quantity. Without the log, two
  identical systems combined would have an entropy
  <em>squared</em>, not doubled &mdash; nonsense. The logarithm is
  not a convenience; it is mathematically forced by the demand that
  combined entropy equal the sum of its parts.
</p>
<p>
  A bonus: the log connects entropy to information. Each
  <em>bit</em> of information doubles $W$, and so each bit adds
  $\\ln 2$ to $S$. Entropy in log form is almost literally a count
  of bits, scaled.
</p>

<h3>Why the constant $k_B$</h3>
<p>
  $\\ln W$ alone is a pure number &mdash; dimensionless, just the log
  of a count. To plug entropy into the rest of physics, it needs
  units.
  <a class="eq-ref" data-eq="what-kb-is">Boltzmann&rsquo;s constant</a>
</p>

<div class="math-tip" data-tip="kb-value">

$$k_B \\;\\approx\\; 1.381 \\times 10^{-23} \\;\\text{J/K}$$

</div>

<p>supplies them: <span class="nowrap"><a class="eq-ref" data-eq="joules-per-kelvin">joules per kelvin</a>.</span></p>
<p>
  Why those units specifically? Because Clausius, decades earlier,
  had already defined entropy thermodynamically as
  $dS = dQ_{\\text{rev}} / \\Theta$ &mdash; energy divided by
  temperature, which gives J/K. Boltzmann needed his statistical
  $S$ to match the existing thermodynamic $S$ as a literal
  equality, not a conceptual analogy. $k_B$ is the conversion
  factor that makes the two pictures yield the same numerical value
  for the same system. Same quantity, two formulas, one constant
  bridging them.
</p>
<p>
  The smallness of $k_B$ is itself meaningful.
  <a class="eq-ref" data-eq="kb-and-na">The factor $10^{-23}$
  reflects how many molecules a single kelvin of thermal energy
  reaches: roughly Avogadro&rsquo;s number, $\\sim 10^{23}$.</a>
  $k_B$ is the &ldquo;per-molecule&rdquo; unit; the thermodynamic
  entropies measured in laboratories are &ldquo;per-mole&rdquo; or
  whole-system. The constant is the bridge between molecular
  bookkeeping and laboratory bookkeeping &mdash; just as
  Avogadro&rsquo;s number is the bridge between atoms and moles.
</p>
<p>
  So: the log compresses the count and makes it additive over
  independent systems; $k_B$ gives the compressed count the right
  physical units. Without the log, the formula is unwriteable and
  non-extensive. Without $k_B$, it does not connect to anything
  measurable. Boltzmann needed both.
</p>

<h3>The god&rsquo;s-eye observer</h3>
<p>
  Imagine an observer who could read every molecule's exact state
  directly. To this observer, every macrostate would contain exactly
  one microstate &mdash; because there are no distinctions below their
  resolution to lump together. Their $W$ would always be $1$. Their
  $S$ would be $0$ for every system.
</p>
<p>
  Multiplicity, in other words, exists <em>because</em> there is a gap
  between what an observer can measure and what is actually the case.
  Entropy is not a property of $w$ alone. It is a property of $w$ as
  read by an observer of finite resolution.
</p>

<h3>The card-counter&rsquo;s deck</h3>
<p>
  Take a shuffled deck. To you, $S$ is high &mdash; you do not know
  which of $\\sim 10^{67}$ orderings the deck is in. Now suppose
  someone next to you has memorized the deck during the shuffle. To
  them, the same physical deck is in a specific known ordering: a
  macrostate of exactly one microstate. To them, $W = 1$ and $S = 0$.
</p>
<p>
  Same physical configuration. Different $S$. The difference is the
  amount of information each observer has. This is the payoff of
  Shannon (6.3): entropy and information are the same quantity. The
  entropy a system has, for you, is the bits of information you do
  not have about its microstate.
</p>

<h3>A note on physical consistency</h3>
<p>
  If entropy depends on the observer, what fixes its value in a
  physics calculation? The convention is to use a <em>standard
  macrostate</em> &mdash; the one defined by the measurable
  thermodynamic variables (temperature, pressure, volume, composition,
  and so on). All real observers using physical instruments end up
  coarse-graining to the same macrostate, so they agree on $S$. The
  deeper observer-relativity is real but does not usually bite,
  because most observers in practice have the same resolution.
</p>

<h3>The connection back to $i$</h3>
<p>
  Section IV said: <em>$i$ is a proper part of $w$. Finite. Local.
  Bounded in attention.</em> Entropy is the precise measure of that
  finitude. To be an embedded observer is necessarily to coarse-grain
  &mdash; to lump distinct microstates under shared macroscopic labels,
  because resolving them all would require the god&rsquo;s-eye view,
  which by 3.0 you do not have. Entropy counts exactly what your
  finitude is hiding from you.
</p>

<p class="aside-detail">
  This is also why ice melting in your tea is irreversible
  <em>to you</em>. In principle, the molecules of the melted ice
  retain enough information to be reassembled into the original cube
  if their motions could be tracked perfectly and reversed. But you
  cannot track them, and no real observer can. So for any
  actually-existing observer, the process is one-way. The arrow of
  $T$ is dynamical &mdash; but at root, also epistemic.
</p>
`,
    },
  },
  shannon: {
    id: "shannon",
    tex: "H \\;=\\; -\\sum_i p_i \\log p_i",
    tooltip: {
      pronunciation: "H equals minus the sum over i of p-i log p-i",
      symbols:
        "$H$ is information entropy; $p_i$ is the probability of state $i$; the sum runs over all possible states.",
      context:
        "Shannon&rsquo;s entropy. Measures the missing information about a probabilistic system. Reduces to Boltzmann&rsquo;s formula when all states are equally likely.",
    },
  },
  pair: {
    id: "pair",
    tex: "dE_{w} \\;=\\; 0 \\qquad dS_{w} \\;\\geq\\; 0",
    tooltip: {
      pronunciation:
        "d E sub w equals zero; d S sub w is greater than or equal to zero",
      symbols:
        "$dE_w$ is the change in total energy of $w$; $dS_w$ is the change in total entropy of $w$.",
      context:
        "The two great bookkeeping quantities. Energy is conserved; entropy is created. One symmetric in time, the other not.",
    },
  },
  pump: {
    id: "pump",
    tex: "\\frac{dS_{i}}{dt} \\;<\\; 0 \\quad \\text{only if} \\quad \\frac{dS_{\\text{env}}}{dt} \\;>\\; \\left|\\frac{dS_{i}}{dt}\\right|",
    tooltip: {
      pronunciation:
        "the rate of change of i&rsquo;s entropy is negative only if the rate of change of the environment&rsquo;s entropy is greater than its absolute value",
      symbols:
        "$dS_i/dt$ is the rate of entropy change inside $i$; $dS_\\text{env}/dt$ is the rate in the environment.",
      context:
        "Living systems decrease their internal entropy only by exporting more disorder than they generate. The body as entropy pump.",
    },
  },

  // Tooltip-only entries — no `tex`, no `detail`. Just glossary tooltips
  // attached to opt-in markup (`<div class="math-tip" data-tip="…">…</div>`)
  // around equations that appear inside detail-page bodies.
  "log-of-product": {
    id: "log-of-product",
    tooltip: {
      pronunciation:
        "log of W-A times W-B equals log W-A plus log W-B",
      symbols:
        "Standard identity of logarithms: $\\log(xy) = \\log x + \\log y$.",
      context:
        "The reason entropy uses a logarithm. $W$ multiplies for independent systems; the log turns that into addition, which is what entropy needs to be.",
    },
    detail: {
      title: "Two machines on a table",
      html: `
<p class="lead">
  Underneath this small algebraic identity is one of the most elegant
  facts about reality: when independent possibilities combine, the
  space of possible worlds <em>multiplies</em>, but the information
  needed to specify one exact world <em>adds</em>. To see this
  clearly, picture two strange little machines.
</p>

<h3>The setup</h3>
<p>
  Imagine two machines sitting side by side on a table. Machine $A$
  can secretly arrange itself in one of $8$ internal configurations.
  Machine $B$ can arrange itself in one of $16$. You cannot see
  inside either machine directly &mdash; all you can do is ask
  yes-or-no questions, and each question divides the remaining
  possibilities in half.
</p>

<h3>Cornering machine $A$</h3>
<p>
  To identify the exact state of $A$, you would need three yes-or-no
  questions. The first cleaves the $8$ states into two halves of $4$.
  The second cleaves the surviving half into two of $2$. The third
  isolates a single state. Three binary splits are enough to single
  out one possibility out of $8$, because $2 \\times 2 \\times 2 = 8$.
</p>

<h3>Cornering machine $B$</h3>
<p>
  Machine $B$ takes four questions, by the same logic
  &mdash; $2 \\times 2 \\times 2 \\times 2 = 16$ &mdash; one more
  bisection than $A$.
</p>

<h3>Putting them together</h3>
<p>
  Now place the two machines together and think of them as one
  combined system. Every possible state of $A$ can coexist with every
  possible state of $B$, so the total number of joint states
  <em>explodes outward</em>:
</p>

$$8 \\times 16 \\;=\\; 128 \\;\\text{possibilities}$$

<p>
  But how many questions do you need to specify the combined state?
  The remarkable thing is that the questions <em>do not multiply the
  way the possibilities do</em>. Since learning the state of $A$
  tells you absolutely nothing about the state of $B$, the
  uncertainty about each machine remains separate. You still need
  $3$ questions to corner $A$ and $4$ to corner $B$, for a total of
  <strong>seven</strong> questions altogether. Seven binary decisions
  distinguish among $2^7 = 128$ possibilities.
</p>

<figure class="bit-diagram">
  <div class="bit-row">
    <span class="bit-row__label">Machine $A$</span>
    <span class="bit-row__bits">
      <span class="bit bit--a">?</span>
      <span class="bit bit--a">?</span>
      <span class="bit bit--a">?</span>
    </span>
    <span class="bit-row__count">$3$ questions &middot; $2^3 = 8$ states</span>
  </div>
  <div class="bit-row">
    <span class="bit-row__label">Machine $B$</span>
    <span class="bit-row__bits">
      <span class="bit bit--b">?</span>
      <span class="bit bit--b">?</span>
      <span class="bit bit--b">?</span>
      <span class="bit bit--b">?</span>
    </span>
    <span class="bit-row__count">$4$ questions &middot; $2^4 = 16$ states</span>
  </div>
  <div class="bit-row bit-row--combined">
    <span class="bit-row__label">$A$ &amp; $B$</span>
    <span class="bit-row__bits">
      <span class="bit bit--a">?</span>
      <span class="bit bit--a">?</span>
      <span class="bit bit--a">?</span>
      <span class="bit bit--b">?</span>
      <span class="bit bit--b">?</span>
      <span class="bit bit--b">?</span>
      <span class="bit bit--b">?</span>
    </span>
    <span class="bit-row__count">$7$ questions &middot; $2^7 = 128$ states</span>
  </div>
  <figcaption class="bit-diagram__punchline">
    States multiply: $8 \\times 16 = 128$. &nbsp;
    Questions add: $3 + 4 = 7$.
  </figcaption>
</figure>

<h3>The equation, in this light</h3>
<p>
  This is exactly what
</p>

$$\\ln(W_A \\cdot W_B) \\;=\\; \\ln W_A + \\ln W_B$$

<p>
  is saying. The logarithm counts how many bits of information are
  needed to specify a state &mdash; how many yes-or-no questions
  bisect the possibilities down to one.
</p>
<dl>
  <dt>$\\ln W_A$</dt>
  <dd>questions needed to corner $A$ &mdash; here, $3$.</dd>
  <dt>$\\ln W_B$</dt>
  <dd>questions needed to corner $B$ &mdash; here, $4$.</dd>
  <dt>$\\ln(W_A \\cdot W_B)$</dt>
  <dd>questions needed to corner the joint system &mdash; here, $7$.</dd>
</dl>
<p>
  The state count <em>multiplies</em>: $W_A \\cdot W_B = 128$.
  The question count <em>adds</em>: $3 + 4 = 7$. The logarithm is
  the bridge between the two countings: it converts the
  multiplicative growth of the state space into the additive growth
  of the information.
</p>

<h3>The deeper picture</h3>
<p>
  Beneath the surface, reality is doing something elegant. When
  independent possibilities combine, the space of possible worlds
  multiplies, but the amount of information needed to specify one
  exact world grows additively &mdash; one bit at a time, through
  successive acts of distinction.
</p>
<p>
  Each yes-or-no question is a single act of distinction: one
  cleaving of the space of possibilities into halves. The number of
  cleavings adds. The number of distinguishable worlds doubles with
  each cleaving. This is why information theory works at all, why
  entropy is logarithmic, and why $S = k_B \\ln W$ is the right
  shape: $\\ln$ is what counts the cleavings.
</p>

<p class="aside-detail">
  And this is why, in the body, the entropy of a cell and the entropy
  of its environment are added, not multiplied. Independent parts
  carry independent uncertainties. The logarithm is the bridge that
  lets us combine them by sum, the way nature actually does.
</p>
`,
    },
  },
  extensivity: {
    id: "extensivity",
    tooltip: {
      pronunciation: "S sub A-B equals S sub A plus S sub B",
      symbols:
        "$S_{AB}$ is the entropy of the combined system $A$ and $B$ taken together; $S_A$ and $S_B$ are the entropies of each.",
      context:
        "The defining property of an extensive quantity: it adds for independent subsystems. Entropy joins energy, mass, charge, and particle number as extensive.",
    },
  },
  "kb-value": {
    id: "kb-value",
    tooltip: {
      pronunciation:
        "k-B is approximately one point three eight one times ten to the minus twenty-three joules per kelvin",
      symbols:
        "$k_B$ is Boltzmann&rsquo;s constant; J/K is joules per kelvin (energy per temperature).",
      context:
        "The numerical value of Boltzmann&rsquo;s constant. Its smallness ($10^{-23}$) reflects that it is a per-molecule unit, with Avogadro&rsquo;s number of molecules per kelvin&rsquo;s worth of thermal energy.",
    },
  },
  "second-law-inequality": {
    id: "second-law-inequality",
    tooltip: {
      pronunciation:
        "d S is greater than or equal to d Q over theta",
      symbols:
        "Same symbols as Clausius&rsquo;s equality, but with $\\geq$ replacing $=$.",
      context:
        "The Second Law in its sharpest form. Real (irreversible) processes always create more entropy than the heat-flow alone accounts for. Equality is an idealized limit; reality always overshoots.",
    },
  },
  "sugar-cube-W": {
    id: "sugar-cube-W",
    tooltip: {
      pronunciation:
        "W is roughly the per-particle count to the N, which is e to the N, which is ten to the ten to the twenty-three",
      symbols:
        "$N$ is the number of particles ($\\sim 10^{23}$); each particle has roughly $e^{\\text{const}}$ accessible states.",
      context:
        "Why $W$ is hyper-exponential. Counting joint microstates across $\\sim 10^{23}$ particles raises a per-particle count to that absurd power.",
    },
  },
  "sugar-cube-lnW": {
    id: "sugar-cube-lnW",
    tooltip: {
      pronunciation: "natural log of W is approximately ten to the twenty-three",
      symbols:
        "$\\ln W$ is the natural logarithm of the microstate count.",
      context:
        "What the log buys us. The unmanageable $W$ becomes a tractable Avogadro-scale number, which then plugs into laboratory-scale entropy via $k_B$.",
    },
  },

  // Prose-only deep dives — no `tex`, reached from inline references.
  "what-mole-is": {
    id: "what-mole-is",
    detail: {
      title: "What a mole is",
      html: `
<p class="lead">
  A mole is just a <em>counting word</em> for a specific large
  number, the way &ldquo;dozen&rdquo; is a counting word for $12$.
  One mole of anything means $6.022 \\times 10^{23}$ of that thing.
  A mole of eggs is $6 \\times 10^{23}$ eggs. A mole of stars is
  $6 \\times 10^{23}$ stars. It is a number, nothing more.
</p>

<h3>Why $6 \\times 10^{23}$ specifically</h3>
<p>
  The reason it is such a weird-looking number &mdash; and the
  reason chemists care about it specifically &mdash; is that it was
  chosen to make atomic bookkeeping convenient. Here is the trick.
</p>
<p>
  Individual atoms have masses that are absurdly tiny in grams. A
  single hydrogen atom weighs about $1.66 \\times 10^{-24}$ grams.
  Useless for lab work; you cannot put one atom on a scale.
</p>
<p>
  But chemists noticed something handy: if you grab <em>enough</em>
  atoms that the total weighs a sensible number of grams &mdash;
  specifically, if you grab a number of atoms equal to the atomic
  mass written on the periodic table, but in grams instead of
  atomic mass units &mdash; you always end up with the same count
  of atoms in your hand. That count is Avogadro&rsquo;s number,
  $6 \\times 10^{23}$. And that pile is called a mole.
</p>

<h3>How it works in practice</h3>
<dl>
  <dt>Hydrogen (atomic mass $1$).</dt>
  <dd>$1$ gram of hydrogen contains one mole of hydrogen atoms.</dd>
  <dt>Carbon (atomic mass $12$).</dt>
  <dd>$12$ grams of carbon contains one mole of carbon atoms.</dd>
  <dt>Oxygen (atomic mass $16$).</dt>
  <dd>$16$ grams of oxygen contains one mole of oxygen atoms.</dd>
  <dt>Water, $\\text{H}_2\\text{O}$ (molecular mass $18$).</dt>
  <dd>$18$ grams of water contains one mole of water molecules.</dd>
</dl>

<h3>Why this matters</h3>
<p>
  This is enormously useful because chemistry happens one molecule
  at a time. When hydrogen and oxygen combine to make water, the
  recipe is <em>two hydrogen atoms plus one oxygen atom per water
  molecule.</em> But in the lab you are working with grams, not
  atoms.
</p>
<p>
  The mole is the bridge: it lets you say &ldquo;I need two moles
  of hydrogen and one mole of oxygen&rdquo; &mdash; which
  translates directly to &ldquo;$2$ grams of hydrogen and $16$
  grams of oxygen&rdquo; &mdash; and you know the atoms will pair
  up correctly because the counts match the recipe, even though
  you measured by weight.
</p>

<p class="callout">
  That is the whole point of the unit. It is a translator between
  the world of grams (where humans live) and the world of atoms
  (where chemistry actually happens). Avogadro&rsquo;s number is
  just whatever count makes that translation come out clean.
</p>

<h3>The size of a mole</h3>
<p>A nice way to feel the size:</p>
<dl>
  <dt>A mole of marbles.</dt>
  <dd>
    Would cover the surface of the Earth to a depth of about $80$
    kilometres.
  </dd>
  <dt>A mole of seconds.</dt>
  <dd>
    About $2 \\times 10^{16}$ years &mdash; over a million times
    the age of the universe.
  </dd>
</dl>
<p>
  An unimaginable number in everyday terms. But in chemistry, it
  is the <em>small</em> end of things, because you need that many
  atoms before you have enough stuff to see.
</p>

<p class="aside-detail">
  The mole exists because human bodies live at a scale where
  individual atoms are invisible. The number $6 \\times 10^{23}$
  is the lower bound on how many atoms you have to gather before
  the chemistry becomes a physical object you can pick up and
  weigh.
</p>
`,
    },
  },

  "kbt-room-temp": {
    id: "kbt-room-temp",
    detail: {
      title: "$k_B T$ at room temperature",
      html: `
<p class="lead">
  At room temperature ($T \\approx 300$ K), the per-molecule thermal
  energy is:
</p>

<div
  data-tt-say="k-B T at three hundred kelvin is approximately four times ten to the minus twenty-one joules"
  data-tt-sym="$k_B T$ is the characteristic thermal energy per degree of freedom; $T \\approx 300$ K is room temperature; the product gives joules per molecule."
  data-tt-ctx="The thermal energy each molecule carries just from being at room temperature. About a trillion times smaller than the energy of a falling grain of sand &mdash; imperceptible at human scale."
>

$$k_B T \\;\\approx\\; (1.38 \\times 10^{-23} \\text{ J/K}) \\times (300 \\text{ K}) \\;\\approx\\; 4 \\times 10^{-21} \\text{ J}$$

</div>

<p>
  That is the thermal energy each individual molecule is carrying,
  just by virtue of being at room temperature. Let&rsquo;s see what
  that really means.
</p>

<h3>How small is $4 \\times 10^{-21}$ joules, really?</h3>
<p>
  To get a feel for how absurdly small: a single grain of sand
  falling one millimeter releases something like $10^{-8}$ joules of
  energy. So $k_B T$ at room temperature is about a <em>trillion
  times smaller</em> than that.
</p>
<p>
  One molecule&rsquo;s worth of room-temperature jiggling is
  essentially nothing on a human scale. You could not detect it with
  any everyday instrument.
</p>

<h3>Now scale up to a glass of water</h3>
<p>
  A glass of water is maybe $250$ grams. Water&rsquo;s molecular
  mass is $18$ grams per mole, so a glass holds roughly
  $250 / 18 \\approx 14$ moles, which is about
  $14 \\times 6 \\times 10^{23} \\approx 8 \\times 10^{24}$
  molecules. Each one is jiggling with around $4 \\times 10^{-21}$
  joules of thermal energy. Multiply:
</p>

<div
  data-tt-say="eight times ten to the twenty-four molecules, each carrying four times ten to the minus twenty-one joules, gives approximately three times ten to the fourth joules"
  data-tt-sym="$8 \\times 10^{24}$ is the molecule count in a glass of water; $4 \\times 10^{-21}$ J is the per-molecule thermal energy; the product is the total hidden thermal energy."
  data-tt-ctx="The cancellation in action. Multiplying a huge molecule count by a tiny per-molecule energy yields a familiar laboratory-scale number: about $30{,}000$ J of thermal energy in a single glass of water."
>

$$8 \\times 10^{24} \\times 4 \\times 10^{-21} \\;\\approx\\; 3 \\times 10^{4} \\text{ J}$$

</div>

<p>
  About $30{,}000$ joules of thermal energy sitting in that glass of
  water, just from being at room temperature rather than at absolute
  zero. (The real number, accounting for all the ways water
  molecules can vibrate and rotate, is a few times larger &mdash;
  but the order of magnitude is right.)
</p>

<h3>What does $30{,}000$ joules mean?</h3>
<p>A few reference points:</p>
<dl>
  <dt>Kinetic energy of a small car at $25$ km/h.</dt>
  <dd>Roughly.</dd>
  <dt>What a $100$-watt lightbulb burns in five minutes.</dt>
  <dd>$100 \\times 60 \\times 5 = 30{,}000$ joules. Exactly that.</dd>
  <dt>Enough to lift the glass straight up $12$ kilometres.</dt>
  <dd>If you could convert it perfectly.</dd>
  <dt>A single bullet at supersonic speed.</dt>
  <dd>
    If you dumped all of it into a single bullet, the bullet would
    be moving faster than the speed of sound.
  </dd>
</dl>

<h3>Why you do not notice</h3>
<p>
  That energy is just <em>sitting there</em>, distributed across
  $10^{25}$ molecules, each carrying its imperceptible share. The
  water looks still because the energy is perfectly randomized
  &mdash; molecules are flying in all directions at hundreds of
  metres per second, but the averages cancel, so nothing visible
  moves.
</p>

<p class="callout">
  Heat is, in a real sense, hidden kinetic energy.
</p>

<h3>&ldquo;Enough to notice if it all suddenly went somewhere&rdquo;</h3>
<p>
  This is the punchline. If by some impossible coincidence all
  those molecules briefly happened to move in the same direction at
  once, the glass would launch itself off the table at car-crash
  speeds.
</p>
<p>
  The Second Law of thermodynamics is basically the statement that
  this never happens &mdash; not because it is forbidden by any
  single-molecule rule, but because the odds of $10^{25}$
  independent molecules randomly aligning are so cosmically small
  that the universe does not have enough time for it.
</p>

<h3>Why cooling is hard and heating is easy</h3>
<p>
  To cool that glass of water by one degree, you have to extract
  roughly $k_B \\times (\\text{number of molecules})$ joules
  &mdash; about $1{,}000$ joules per kelvin. That energy has to go
  <em>somewhere</em>, and physics charges a fee (entropy) for
  moving heat from cold to hot. Refrigerators and air conditioners
  exist to pay that fee.
</p>
<p>
  Going the other direction &mdash; dumping energy in to heat
  things up &mdash; is trivial: friction, electricity, sunlight,
  anything works.
</p>

<h3>The deeper lesson</h3>
<p>
  The deeper lesson hiding in $k_B T$ is that the world you
  experience as <em>room temperature, nothing happening</em> is
  actually a roaring storm at the molecular level. Every object
  around you is a reservoir of enormous energy, locked up in
  randomness.
</p>

<p class="callout">
  Temperature is just our crude macroscopic readout of how violent
  that hidden storm is. $k_B$ is the conversion factor that lets us
  translate between the calm surface and the chaos underneath.
</p>

<p class="aside-detail">
  Every glass of water is a battery. We just cannot spend it,
  because the energy is not organized &mdash; it is the unorganized
  residue of $10^{25}$ molecules each doing their own thing. The
  Second Law is the universe&rsquo;s policy on what kinds of energy
  can be spent and what kinds are locked.
</p>
`,
    },
  },

  "what-kb-is": {
    id: "what-kb-is",
    detail: {
      title: "What $k_B$ is, in plain terms",
      html: `
<p class="lead">
  $k_B$ appears in every formula in statistical mechanics, but what
  <em>is</em> it? Not the value &mdash; the thing itself. In plain
  terms, $k_B$ is an exchange rate.
</p>

<h3>The two rulers</h3>
<p>
  Imagine you have two rulers.
</p>
<dl>
  <dt>The temperature ruler.</dt>
  <dd>
    Measured in degrees. Built for humans, calibrated to reproducible
    physical landmarks humans can directly witness &mdash; water
    freezing, water boiling, the warmth of the body.
  </dd>
  <dt>The energy ruler.</dt>
  <dd>
    Measured in joules. Built for engineers, built around mechanical
    quantities humans can directly manipulate &mdash; masses,
    distances, times, forces.
  </dd>
</dl>
<p>
  Neither ruler knows anything about atoms. But atoms are what is
  actually doing the jiggling when something gets hot. So somebody
  has to figure out the exchange rate: <em>if I raise the temperature
  by one tick on the human ruler, how much energy does each tiny
  atom actually pick up on the engineer&rsquo;s ruler?</em>
</p>

<p class="callout">
  That exchange rate is $k_B$. It is tiny &mdash; $10^{-23}$ joules
  per kelvin &mdash; because atoms are tiny, and a single one
  barely carries any energy at all.
</p>

<h3>Why $1.38$ specifically</h3>
<p>
  That number is not deep. It is a leftover from history. We picked
  our temperature scale based on water, and our energy scale based on
  pushing things around. Nature did not consult us.
</p>
<p>
  So when you finally ask how those two scales connect at the atomic
  level, you get whatever number falls out &mdash; which happens to
  be $1.38$. If the Celsius scale had been set up differently
  &mdash; say, $200$ degrees between freezing and boiling instead of
  $100$ &mdash; the number would be different too. <em>It is the
  size of our chosen units showing up, not a law of nature.</em>
</p>

<h3>How we actually know the number</h3>
<p>
  The trick is that $k_B$ shows up in lots of different places, so
  you can measure it lots of different ways and check they agree.
  A few:
</p>
<dl>
  <dt>Squeeze a gas.</dt>
  <dd>
    Watch how its pressure changes with temperature. A little
    algebra gets you <span class="nowrap">$k_B$.</span>
  </dd>
  <dt>Watch dust dance.</dt>
  <dd>
    Put a speck of dust in water and watch it get knocked around by
    the water molecules. The harder it jiggles, the bigger $k_B$
    must be. (Einstein worked this out; Perrin measured it; both
    got famous.)
  </dd>
  <dt>Look at colour.</dt>
  <dd>
    Heat something up and look at the colour of light it glows. The
    shape of that glow depends on $k_B$.
  </dd>
  <dt>Listen to a sphere.</dt>
  <dd>
    Fill a metal sphere with argon and listen to the pitch it rings
    at. The pitch depends on how fast the atoms move, which depends
    on $k_B$. This is how the most precise modern measurements are
    done.
  </dd>
</dl>
<p>
  Different experiments, totally unrelated setups, all give the same
  number. <em>That</em> is the evidence.
</p>
<p>
  By 2019 we trusted the number so well that we stopped measuring
  it and just <em>declared</em> it to be exactly
  $1.380649 \\times 10^{-23}$, then redefined the kelvin to match.
  Like deciding the meter is &ldquo;however far light travels in
  $1/299{,}792{,}458$ of a second&rdquo; &mdash; you flip which
  thing is fundamental.
</p>

<h3>The punchline</h3>
<p>
  $k_B$&rsquo;s smallness and Avogadro&rsquo;s number&rsquo;s
  bigness are <em>the same fact wearing two outfits</em>.
</p>
<dl>
  <dt>Atoms are small.</dt>
  <dd>So each one carries little energy. $k_B$ is small.</dd>
  <dt>There are lots of them in anything you can hold.</dt>
  <dd>$N_A$ is big.</dd>
</dl>
<p>
  Multiply them and the smallness cancels the bigness, leaving the
  everyday-sized energies we deal with in a chemistry lab. The
  universe is doing bookkeeping at two scales at once, and these
  constants are the receipts.
</p>
<p>
  For the full version of the mirror, see
  <a class="eq-ref" data-eq="kb-and-na">why $k_B$ and
  Avogadro&rsquo;s number are mirrors</a>.
</p>

<h3>What this looks like in practice</h3>
<p>
  Pour a glass of water at room temperature. By the bookkeeping
  $k_B$ enforces, that glass contains tens of thousands of joules of
  thermal energy &mdash; enough to launch itself off the table at
  car-crash speeds if it ever happened to organize. See
  <a class="eq-ref" data-eq="kbt-room-temp">$k_B T$ at room
  temperature</a> for what these everyday constants actually
  amount to in everyday objects.
</p>

<p class="aside-detail">
  So in plain terms: $k_B$ is the exchange rate between the
  human-built rulers of degrees and joules and the actual physics
  going on at the atomic scale. Its smallness records that atoms
  are tiny. Its specific value records how we drew our human
  rulers. Together they say: nature is doing this at one scale, we
  measure it at another, and $k_B$ is the receipt that lets the two
  scales speak to each other.
</p>
`,
    },
  },

  "kb-and-na": {
    id: "kb-and-na",
    detail: {
      title: "Why $k_B$ and Avogadro&rsquo;s number are mirrors",
      html: `
<p class="lead">
  Two constants in physics look unrelated at first. Boltzmann&rsquo;s
  constant $k_B \\approx 1.38 \\times 10^{-23}$ J/K, and
  Avogadro&rsquo;s number $N_A \\approx 6 \\times 10^{23}$. The fact
  that one has $10^{-23}$ and the other has $10^{23}$ is <em>not a
  coincidence</em> &mdash; it is basically the whole story.
</p>

<h3>Temperature is per-molecule energy in disguise</h3>
<p>
  Temperature, in everyday units, is a <em>per-molecule</em> energy
  disguised as something macroscopic. When you say a gas is at one
  kelvin, what is physically happening is that each molecule carries
  a tiny bit of thermal energy &mdash; on the order of $k_B T$
  joules.
</p>
<p>
  At $T = 1$ K, that is about $10^{-23}$ joules per molecule.
  Vanishingly small, because a single molecule is a vanishingly
  small thing.
</p>

<h3>Zoom out to a <a class="eq-ref" data-eq="what-mole-is">mole</a></h3>
<p>
  Now zoom out. Take a <em>mole</em> of stuff &mdash; roughly
  $6 \\times 10^{23}$ molecules, a chunk you can actually hold
  &mdash; and ask how much thermal energy a one-kelvin temperature
  corresponds to across the whole pile. You multiply:
</p>

<div
  data-tt-say="k-B times N-A is approximately ten to the minus twenty-three times ten to the twenty-three, approximately one"
  data-tt-sym="$k_B \\sim 10^{-23}$ J/K (per-molecule); $N_A \\sim 10^{23}$ (molecules per mole); their product is order one."
  data-tt-ctx="The whole reason these constants are mirror images: the smallness of $k_B$ exactly cancels the bigness of $N_A$, leaving an order-one prefactor at human scale."
>

$$k_B \\times N_A \\;\\approx\\; 10^{-23} \\times 10^{23} \\;\\approx\\; 1 \\quad \\text{(order of magnitude)}$$

</div>

<p>More precisely,</p>

<div
  data-tt-say="k-B times N-A equals R, approximately 8.3 joules per mole-kelvin"
  data-tt-sym="$k_B$ Boltzmann&rsquo;s constant; $N_A$ Avogadro&rsquo;s number; $R$ the gas constant; J/(mol&middot;K) joules per mole per kelvin."
  data-tt-ctx="$R$ is the per-mole counterpart of the per-molecule $k_B$. At one kelvin, one mole of an ideal gas carries about 8.3 J of thermal energy. This is the precise version of the order-of-magnitude estimate above."
>

$$k_B \\cdot N_A \\;=\\; R \\;\\approx\\; 8.3 \\;\\text{J/(mol}\\cdot\\text{K)}$$

</div>

<p>
  the gas constant. The $10^{-23}$ in $k_B$ and the $10^{23}$ in
  $N_A$ cancel out, leaving a number of order $1$ &mdash; which is
  exactly the scale of energies we deal with in human-sized
  chemistry and thermodynamics (joules, not yoctojoules).
</p>

<h3>$k_B$&rsquo;s smallness, explained</h3>
<p>
  So when we said earlier that $k_B$&rsquo;s smallness
  &ldquo;reflects how many molecules a kelvin of thermal energy
  reaches,&rdquo; the deeper idea is this: a kelvin is defined at
  the <em>human</em> scale (water freezes, ice melts, gas
  thermometers read room temperature), but energy at the
  <em>molecular</em> scale is $N_A$ times smaller per particle.
  $k_B$ is the conversion factor that bridges the two worlds, and
  its size &mdash; $10^{-23}$ &mdash; is small <em>because</em>
  Avogadro&rsquo;s number is large.
</p>

<p class="callout">
  The two constants are mirror images of the same fact: molecules
  are tiny, and there are an enormous number of them in anything you
  can see.
</p>

<h3>A small caveat on the phrasing</h3>
<p>
  &ldquo;How many molecules a kelvin of thermal energy reaches&rdquo;
  is a bit loose. It is not that $1$ K of energy is
  &ldquo;spread across&rdquo; $N_A$ molecules in some literal sense.
  It is that the <em>unit</em> kelvin was historically defined at
  the macroscopic scale, so connecting it to single-molecule
  energies requires a factor of roughly $1/N_A$. That factor is
  $k_B$.
</p>

<p class="aside-detail">
  This is one of those places where a constant&rsquo;s numerical
  value encodes a fact about the world&rsquo;s structure. $k_B$
  could in principle have any value; that it lands at $10^{-23}$
  J/K is the universe telling us, in unit-form, how many molecules
  fit in a mole.
</p>
`,
    },
  },

  "joules-per-kelvin": {
    id: "joules-per-kelvin",
    detail: {
      title: "Joules per kelvin",
      html: `
<p class="lead">
  A joule and a kelvin are both human-created measurement units, but
  they correspond to very real patterns in nature.
</p>
<p>
  A joule measures energy. A kelvin measures temperature. But those
  words &mdash; <em>energy</em> and <em>temperature</em> &mdash; can
  feel foggy until you connect them to lived physical intuition.
</p>

<h3>Joules</h3>
<p>
  A joule is a measure of the capacity to cause change through
  physical processes:
</p>
<ul>
  <li>motion</li>
  <li>heating</li>
  <li>lifting</li>
  <li>deforming</li>
  <li>accelerating</li>
  <li>radiating light</li>
</ul>
<p>
  If you lift an apple upward, energy is transferred into
  gravitational potential energy. If you heat water, energy flows
  into molecular motion. If you throw a ball, energy appears as
  organized motion. The joule is just the standardized accounting
  unit for these transformations.
</p>
<p>Formally,</p>

$$1\\ \\text{joule} \\;=\\; 1\\ \\text{newton-meter}$$

<p>
  &mdash; the energy transferred when a force of one newton moves
  something one meter. But beneath the formal definition is a deeper
  idea:
</p>

<p class="callout">
  Energy measures the ability for physical state to change.
</p>

<h3>Kelvins</h3>
<p>
  Kelvin measures temperature, but temperature is not exactly
  &ldquo;heat.&rdquo; Temperature is more like:
</p>

<p class="callout">
  how energetically the microscopic degrees of freedom are
  fluctuating.
</p>

<p>
  In ordinary matter, that mostly means molecular motion. Hotter
  systems have molecules jiggling, colliding, vibrating more
  intensely on average. Kelvin gives a scale for that.
</p>
<p>
  The special thing about kelvin is that it starts at absolute zero
  &mdash; $0\\,\\text{K}$ &mdash; which corresponds to the theoretical
  limit where thermal motion is minimized as much as quantum
  mechanics allows. Unlike Celsius (water freezing at $0^\\circ$,
  boiling at $100^\\circ$), kelvin is tied more fundamentally to
  physics itself.
</p>
<dl>
  <dt>Room temperature</dt>
  <dd>about $300$ K</dd>
  <dt>Surface of the Sun</dt>
  <dd>about $5800$ K</dd>
</dl>

<h3>Why entropy has units of joules per kelvin</h3>
<p>Entropy has units of</p>

$$\\frac{\\text{joules}}{\\text{kelvin}}$$

<p>Why? Because entropy measures</p>

<p class="callout">
  how much energy dispersal corresponds to a given temperature scale.
</p>

<p>More intuitively:</p>
<ul>
  <li>joules tell you <em>how much energy</em>;</li>
  <li>
    kelvin tells you <em>how thermally excited the system already
    is</em>;
  </li>
  <li>
    entropy relates energy flow to the number of accessible
    microscopic arrangements.
  </li>
</ul>
<p>
  A rough intuition: adding $100$ joules to an ice cube changes its
  entropy differently than adding $100$ joules to a star, because the
  temperatures differ enormously. Entropy&rsquo;s units encode this
  relationship between energy and thermal state.
</p>

<h3>The dollar intuition</h3>
<p>
  Suppose I hand you one dollar. To a starving person, that dollar
  changes possibilities dramatically. To a billionaire, almost not at
  all.
</p>
<p>
  Similarly: a certain amount of energy has different thermodynamic
  significance depending on the system&rsquo;s temperature. Entropy
  tracks that significance.
</p>

<h3>Boltzmann&rsquo;s constant as bridge</h3>
<p>
  And $k_B$ acts as the conversion bridge between:
</p>
<dl>
  <dt>Microscopic statistical counting.</dt>
  <dd>
    How many arrangements the system has access to. Dimensionless.
  </dd>
  <dt>Macroscopic energy-temperature physics.</dt>
  <dd>
    Measured in joules and kelvin. Concrete, instrument-readable
    quantities.
  </dd>
</dl>
<p>
  $k_B$ is what lets the abstract count of microstates speak the
  language of laboratory thermodynamics. Without it, the two pictures
  are unrelated arithmetic. With it, they are the same physics in
  different clothes.
</p>

<p class="aside-detail">
  The deeper point: a joule of energy means different things in
  different thermal contexts, and that contextual difference is what
  entropy is measuring. Joules per kelvin is the natural unit of that
  contextual significance.
</p>
`,
    },
  },

  "entropy-additivity": {
    id: "entropy-additivity",
    detail: {
      title: "Why entropy should add",
      html: `
<p class="lead">
  Why should entropy add when systems combine, instead of multiply?
  And underneath that is an even more basic question:
  <em>what kind of thing is entropy supposed to be?</em>
</p>

<p>
  Right now you are seeing two incompatible motions:
</p>
<ul>
  <li>microscopic possibilities combine by <strong>multiplication</strong></li>
  <li>macroscopic quantities combine by <strong>addition</strong></li>
</ul>
<p>
  and it feels like someone swapped arithmetic systems halfway through
  the story. So let us build the bridge carefully.
</p>

<h3>The multiplicative world</h3>
<p>
  Imagine two physically separate boxes of gas. Box $A$ contains one
  litre of gas. Box $B$ contains one litre of gas.
</p>
<p>
  Suppose Box $A$ has $100$ possible microscopic arrangements, and Box
  $B$ has $1000$. Together:
</p>

$$W_{\\text{total}} \\;=\\; 100 \\times 1000 \\;=\\; 100{,}000$$

<p>
  because for every arrangement of $A$, $B$ can independently be in
  any of its arrangements. That multiplication is unavoidable. It
  comes directly from combinatorics.
</p>

<h3>The additive world</h3>
<p>
  Here is the important shift.
  <em>Entropy is not trying to count microscopic arrangements
  directly.</em> Entropy is trying to behave like a physical,
  size-like quantity.
</p>
<p>
  What does that mean? If you combine two independent chunks of
  matter:
</p>
<dl>
  <dt>Masses add.</dt>
  <dd>Two kilograms plus two kilograms gives four kilograms.</dd>
  <dt>Volumes add.</dt>
  <dd>
    Two litres plus two litres gives four litres. Not <em>two litres
    times two litres</em>.
  </dd>
  <dt>Energies add.</dt>
  <dd>The energy of the whole is the sum of the energies of the parts.</dd>
</dl>
<p>
  Thermodynamics emerged historically from people studying steam
  engines, heat flow, pressure, energy &mdash; all bulk properties of
  matter. And these bulk properties shared a consistent character:
  <strong>when you combine independent systems, the total amount is
  the sum of the parts.</strong> Quantities with this property are
  called <em>extensive quantities</em>.
</p>
<p>
  So physicists already knew &mdash; before Boltzmann &mdash; that
  entropy behaves experimentally like this too:
</p>

$$S_{\\text{total}} \\;=\\; S_A + S_B$$

<p>
  That was not arbitrary. It came from thermodynamic observation.
</p>

<h3>Boltzmann&rsquo;s challenge</h3>
<p>
  His task was:
</p>
<p>
  <em>How can entropy be related to microscopic configurations while
  still preserving this additive behaviour?</em>
</p>
<p>
  Now the tension appears clearly:
</p>
<ul>
  <li>microstate counts <strong>multiply</strong></li>
  <li>entropy <strong>adds</strong></li>
</ul>
<p>
  So Boltzmann needed a mathematical operation that converts
  multiplication into addition. There is essentially one natural
  operation that does this:
</p>

$$\\log(ab) \\;=\\; \\log a + \\log b$$

<p>
  Suddenly everything clicks:
</p>

$$S \\;=\\; k_B \\ln W$$

<p>
  because then
</p>

$$S_{\\text{total}} \\;=\\; k_B \\ln(W_A \\, W_B) \\;=\\; k_B(\\ln W_A + \\ln W_B) \\;=\\; S_A + S_B.$$

<p>
  The logarithm is not decorative. It is the <em>bridge</em> between
  the multiplicative world of microscopic combinations and the
  additive world of macroscopic physical quantities.
</p>

<h3>Why it can begin to feel obvious</h3>
<p>
  Once you internalize what thermodynamics is studying, the bridge
  stops feeling like a trick.
</p>
<p>
  Thermodynamics is not counting arrangements directly. It is
  measuring how much <em>physical stuff-ness</em>, or <em>capacity for
  rearrangement</em>, a system has at the macroscopic level. And
  macroscopic amount-like things add when you put systems together.
</p>
<p>
  Another way to feel it. Imagine I tell you that System $A$ has
  entropy $5$ and System $B$ has entropy $7$. You expect the combined
  system to have <em>more entropy than either alone</em>. Addition
  expresses accumulation naturally.
</p>
<p>
  If entropy multiplied, $5 \\times 7 = 35$ &mdash; merely placing
  systems side by side would create bizarre explosive scaling
  disconnected from ordinary physical intuition. The logarithm
  prevents that runaway behaviour by compressing multiplicative
  combinatorics into additive physical measure.
</p>

<h3>The pattern, everywhere</h3>
<p>
  Here is the genuinely beautiful thing. Nature itself appears to
  organize this way everywhere. Whenever independent possibilities
  combine multiplicatively, but we want a smooth additive measure of
  &ldquo;amount,&rdquo; logarithms appear.
</p>
<dl>
  <dt>Entropy.</dt>
  <dd>$S = k_B \\ln W$.</dd>
  <dt>Information theory.</dt>
  <dd>$H = -\\sum_i p_i \\log p_i$.</dd>
  <dt>Sound intensity.</dt>
  <dd>Decibels: $L = 10 \\log_{10}(I / I_0)$.</dd>
  <dt>Earthquake magnitude.</dt>
  <dd>The Richter scale &mdash; a logarithm of seismic amplitude.</dd>
  <dt>Stellar brightness.</dt>
  <dd>Apparent magnitude &mdash; a logarithm of received flux.</dd>
</dl>
<p>
  Because logarithms are what minds and physics use to navigate
  enormous multiplicative spaces.
</p>

<p class="aside-detail">
  The next time you see a logarithm in a formula, ask: what
  multiplicative thing is being measured as if it were an amount? The
  answer is almost always that the underlying space is combinatorial
  or exponential, but the quantity we want to use is additive, and
  the log is what does the conversion. Entropy is the cleanest
  instance, but not the only one.
</p>
`,
    },
  },

  "sugar-cube": {
    id: "sugar-cube",
    detail: {
      title: "The size of $W$",
      html: `
<p class="lead">
  $W$ counts the microstates compatible with a single macrostate. For
  a sugar cube on the table, $W \\approx 10^{10^{23}}$ &mdash; a number
  so large that no number you have ever encountered comes close.
  Why this many?
</p>

<h3>What is varying</h3>
<p>
  A sugar cube contains roughly $10^{23}$ molecules. Each molecule has
  a position $(x, y, z)$ and a momentum $(p_x, p_y, p_z)$ &mdash; six
  numbers per molecule. A <em>microstate</em> of the cube is the full
  list of positions and momenta for all $\\sim 10^{23}$ molecules.
  Trillions of trillions of numbers, jointly.
</p>
<p>
  Two microstates &ldquo;differ&rdquo; if any single molecule is in a
  different position, or moving with a different velocity, even
  slightly. The macrostate &mdash; the cube as you see it: shape,
  mass, temperature &mdash; does not care which specific molecule is
  where, only that the bulk properties match.
</p>

<h3>Why the count is so big</h3>
<p>
  Each molecule has, roughly, $e^{\\text{const}}$ accessible
  phase-space cells &mdash; many distinguishable values for its
  position and momentum. The total count of joint microstates is the
  per-molecule count <em>raised to the power</em> of the number of
  molecules:
</p>

<div class="math-tip" data-tip="sugar-cube-W">

$$W \\;\\sim\\; (\\text{per-particle count})^N \\;\\sim\\; e^{N} \\;\\sim\\; 10^{10^{23}}$$

</div>

<p>
  The hyper-exponential form comes from this exponentiation. Adding
  one more particle multiplies $W$ by a constant factor; doubling
  $N$ raises $W$ to the second power. With $N$ near Avogadro's
  number, the result blows past every named &ldquo;large
  number&rdquo; in mathematics or physics.
</p>

<h3>For scale</h3>
<dl>
  <dt>$10^{12}$ &mdash; a trillion.</dt>
  <dd>
    Roughly the limit of intuitive estimation for most people.
    Beyond this, the felt difference between numbers collapses.
  </dd>
  <dt>$10^{80}$ &mdash; atoms in the observable universe.</dt>
  <dd>
    The biggest physically meaningful count we have. One per atom,
    in every star and dust grain.
  </dd>
  <dt>$10^{100}$ &mdash; a googol.</dt>
  <dd>
    Already vastly larger than the number of atoms anywhere.
  </dd>
  <dt>$10^{10^{23}}$ &mdash; the sugar cube&rsquo;s $W$.</dt>
  <dd>
    A 1 followed by $10^{23}$ zeros. Writing it out in regular
    decimal would require more digits than there are particles in
    your body, many times over.
  </dd>
</dl>
<p>
  There is no useful intuition for a number this large. The mind
  bottoms out somewhere around $10^{12}$; everything beyond is just
  &ldquo;incomprehensible,&rdquo; with no felt distinction between
  $10^{50}$ and $10^{10^{23}}$. The mathematics tracks the
  difference; intuition does not.
</p>

<h3>Why the logarithm</h3>
<p>
  This is precisely why Boltzmann took the log. Working with $W$
  directly is hopeless. But:
</p>

<div class="math-tip" data-tip="sugar-cube-lnW">

$$\\ln W \\;\\approx\\; 10^{23}$$

</div>

<p>
  &mdash; large, yet tractable. Multiplying by
  $k_B \\approx 10^{-23}$ J/K gives an entropy of a few J/K &mdash;
  a perfectly normal laboratory number. The log compresses
  unimaginable counts into measurable units. It is the only way
  these quantities can be written down at all.
</p>

<p class="aside-detail">
  The shape of the answer: $10^{10^{23}}$ is the count of distinct
  microscopic arrangements (each molecule&rsquo;s position and
  velocity, fully specified) all consistent with the cube being
  &ldquo;a sugar cube at room temperature on the table,&rdquo; as
  observed from outside. The macrostate is one description; the
  microstates compatible with it are this many. This is what
  entropy counts.
</p>
`,
    },
  },
};
