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

<h3>Unpacking the words</h3>
<p>
  The phrase &ldquo;infinitesimal heat exchange along a reversible
  path&rdquo; is carrying serious technical content. Let&rsquo;s take
  it apart.
</p>

<p>
  <em>&ldquo;Heat exchange&rdquo;</em> is the easiest. It means energy
  flowing in or out of a system as heat (as opposed to as work).
  Usually written $\\delta Q$ or $dQ$. A hot stove transferring energy
  to a pot of water is heat exchange. Nothing fancy.
</p>

<p>
  <em>&ldquo;Infinitesimal&rdquo;</em> means vanishingly small &mdash;
  a single mathematical sliver of heat, not a finite chunk. The
  notation $\\delta Q$ means &ldquo;the tiny bit of heat exchanged
  during a tiny step of the process.&rdquo;
</p>
<p>
  Why does it matter? Because when you change a system&rsquo;s
  temperature, the system&rsquo;s properties (like its capacity to
  absorb heat at a given temperature) change continuously along the
  way. If you dump a finite amount of heat in all at once, the
  temperature, pressure, and so on swing across a range, and you
  can&rsquo;t cleanly say &ldquo;this much heat was added at
  <em>this</em> temperature.&rdquo; But if you imagine the heating as
  a sequence of infinitely many infinitesimal steps, each step
  happens at a definite temperature, and you can do calculus on the
  process. The infinitesimal is the language of &ldquo;every moment
  of the process has well-defined state variables.&rdquo;
</p>

<p>
  <em>&ldquo;Reversible path&rdquo;</em> is the deep one, and it is
  <em>not</em> the same as &ldquo;can be undone.&rdquo; That is the
  crucial misreading.
</p>
<p>
  A reversible process is one carried out so slowly, and so gently,
  that the system is in thermodynamic equilibrium at every moment
  along the way. Practically:
</p>
<ul>
  <li>Temperature differences between system and surroundings are
    infinitesimal at every step (no big gradient causing rapid heat
    flow).</li>
  <li>Pressure differences are infinitesimal (no rushing of gas).</li>
  <li>No friction, no turbulence, no rapid mixing.</li>
  <li>The process could be reversed by an infinitesimal change in
    conditions, with no net dissipation.</li>
</ul>
<p>
  The hallmark of reversibility is that running the process backward
  returns both the system <em>and</em> the surroundings to their
  original states, with zero net change anywhere in the universe. No
  entropy is generated.
</p>

<p>
  <em>The classic non-reversible example.</em> Take a cold mug and put
  it on a hot stove. Heat flows from stove to mug; the mug warms up.
  Now move the mug to a cold freezer &mdash; it cools back down to
  where it started. The mug has been &ldquo;warmed and cooled.&rdquo;
  But the process was <em>not</em> reversible, because:
</p>
<ul>
  <li>The hot stove lost some energy that ended up partly heating the
    room.</li>
  <li>The freezer had to do work (electricity) to dump the mug&rsquo;s
    heat to its surroundings.</li>
  <li>The total entropy of the universe went up.</li>
</ul>
<p>
  If you tried to run the whole sequence backward &mdash; heat
  spontaneously flowing from cold freezer back into stove, room
  cooling down, electricity flowing back into the grid &mdash; it
  would violate the Second Law. The mug ended up where it started,
  but the universe did not.
</p>
<p>
  A truly reversible heating would require the stove to be only
  infinitesimally warmer than the mug at every instant &mdash; say,
  $0.000001^\\circ$C warmer &mdash; so that the heat transfer happens
  with no temperature gradient, no rushing, no waste. The cooling
  would require a cold reservoir only infinitesimally cooler than the
  mug. The whole process would take infinitely long.
</p>

<p class="callout">
  Reversible processes do not exist in reality. They are an idealized
  limit.
</p>

<p>
  <em>So why do physicists use the concept?</em> Because it lets you
  define quantities cleanly. The subscript &ldquo;rev&rdquo; in
  Clausius&rsquo;s formula is doing serious work: only along a
  reversible path is the ratio $\\delta Q / \\Theta$ a clean
  differential of a state function (entropy). Along an irreversible
  path, you would get the wrong answer &mdash; too small, in fact.
</p>
<p>
  For real (irreversible) processes, the actual entropy change is
  <em>greater</em>:
</p>

<div class="math-tip" data-tip="second-law-inequality">

$$dS \\;\\geq\\; \\frac{dQ}{\\Theta}$$

</div>

<p>
  Equality is an unreachable ideal; every real exchange leaks more
  entropy than the formula predicts. This inequality is what gives
  the Second Law its bite.
</p>
<p>
  Reversibility is not a description of real processes; it is a
  <em>measurement protocol</em> for defining quantities that do not
  depend on the path you took. Once you have defined entropy along an
  imagined reversible path between two states, you can use that value
  for <em>any</em> process between those states, reversible or not
  &mdash; because entropy is a state function.
</p>

<p>
  <em>A useful analogy.</em> Think of reversible processes the way
  you would think of frictionless surfaces in mechanics. No real
  surface is frictionless, but the concept lets you write clean
  equations like $F = ma$ without endless correction terms. Once you
  have done the analysis in the idealized world, you can layer
  real-world dissipation back on top. Reversibility plays the same
  role in thermodynamics &mdash; it is the frictionless limit that
  makes the math tractable.
</p>

<p>
  <em>Putting the whole phrase together.</em>
  &ldquo;Infinitesimal heat exchange along a reversible path&rdquo;
  means: the tiny bit of heat $\\delta Q$ that flows into a system
  during one infinitesimal step of a process that is being carried
  out quasi-statically, in equilibrium throughout, with no entropy
  generation. It is the idealized scenario where you can divide
  $\\delta Q$ by the system&rsquo;s temperature $\\Theta$ and get a
  meaningful $dS$ &mdash; the building block of entropy.
</p>

<p class="callout">
  Reversibility is specifically about the manner of the warming and
  cooling &mdash; slow enough, gentle enough, and
  equilibrium-preserving enough that the universe would not notice if
  you ran the movie backward.
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
  boundary: {
    id: "boundary",
    tex: "\\partial i \\;\\subset\\; w",
    tooltip: {
      pronunciation: "boundary of i is a subset of w",
      symbols:
        "$\\partial i$ is the boundary of $i$ (topological notation, borrowed); $\\subset$ is set inclusion; $w$ is the world.",
      context:
        "The surface across which $i$ exchanges matter, energy, and information with the rest of $w$. The notation $\\partial$ comes from topology, where it denotes the boundary of a region.",
    },
  },
  "boundary-dynamic": {
    id: "boundary-dynamic",
    tex: "\\partial i \\;=\\; \\partial i(t, \\, \\text{context})",
    tooltip: {
      pronunciation:
        "boundary of i is a function of time and context",
      symbols:
        "$\\partial i(t, \\text{context})$ &mdash; the boundary as a function of the current moment and the current coupling.",
      context:
        "Unlike a body&rsquo;s anatomical surface, $i$&rsquo;s operational boundary deforms with what $i$ is presently engaged with. A drum, a steering wheel, a piano key &mdash; each shifts the effective boundary outward while the body itself stays put.",
    },
  },
  "wave-speed-eqn": {
    id: "wave-speed-eqn",
    tex: "v \\;=\\; \\sqrt{\\frac{K}{\\rho}}",
    tooltip: {
      pronunciation: "v equals the square root of K over rho",
      symbols:
        "$v$ is the wave speed; $K$ is an elastic modulus (stiffness, in pascals); $\\rho$ is density (mass per unit volume, in kg/m³).",
      context:
        "The propagation speed of a pressure wave in a medium. Stiffer media transmit faster; denser media transmit slower. The square root comes from the wave equation, which is second-order in time and space.",
    },
  },
  "newton-second-law": {
    id: "newton-second-law",
    tex: "F \\;=\\; m \\, a",
    tooltip: {
      pronunciation: "F equals m a",
      symbols:
        "$F$ is the net force on an object; $m$ is its mass; $a$ is the resulting acceleration.",
      context:
        "Newton&rsquo;s second law of motion. The bedrock equation of classical mechanics: the force on something equals its mass times the acceleration that force produces.",
    },
  },
  "hookes-law": {
    id: "hookes-law",
    tex: "F \\;=\\; -K x",
    tooltip: {
      pronunciation: "F equals minus K x",
      symbols:
        "$F$ is the restoring force; $K$ is the spring constant (stiffness); $x$ is the displacement from rest. The minus sign means the force opposes the displacement.",
      context:
        "Hooke&rsquo;s law. A spring (or any elastic medium under small deformations) pushes back proportionally to how far it has been displaced. The constant $K$ measures how stiffly it pushes.",
    },
  },
  sensorium: {
    id: "sensorium",
    tex: "\\sigma_i \\;\\subset\\; \\partial i",
    tooltip: {
      pronunciation:
        "sigma sub i is a subset of the boundary of i",
      symbols:
        "$\\sigma_i$ is $i$&rsquo;s sensorium &mdash; the set of channels by which $w$ reaches $i$; $\\subset$ is set inclusion; $\\partial i$ is the boundary.",
      context:
        "The sensorium lives in the boundary &mdash; it is the inward-facing side of $\\partial i$, where signals from $w$ become signals inside $i$. Retina, cochlea, taste buds, skin receptors are all parts of $\\sigma_i$.",
    },
  },
  simulation: {
    id: "simulation",
    tex: "\\mathcal{S}_i \\;\\subset\\; i",
    tooltip: {
      pronunciation: "S-script sub i is a subset of i",
      symbols:
        "$\\mathcal{S}_i$ is the simulation &mdash; $i$&rsquo;s internal model of $w$; $\\subset$ is set inclusion; $i$ is the questioner&rsquo;s worldline.",
      context:
        "The simulation is a definite component of $i$ &mdash; the running internal model of $w$ that generates predictions, memories, imaginings, and narratives. Not the whole of $i$, just one stratum. Distinct from the entropy $S$ (italic, not script) and the sensorium $\\sigma_i$ (lowercase Greek).",
    },
  },
  "prediction-error": {
    id: "prediction-error",
    tex: "\\varepsilon_i \\;=\\; \\sigma_i \\,-\\, \\mathcal{S}_i",
    tooltip: {
      pronunciation:
        "epsilon sub i equals sigma sub i minus S-script sub i",
      symbols:
        "$\\varepsilon_i$ is the prediction error of $i$; $\\sigma_i$ is what the sensorium actually delivers; $\\mathcal{S}_i$ is what the simulation predicted.",
      context:
        "The difference between what was predicted and what arrived. The brain mostly transmits this error term upward; the simulation predicts $w$, the sensorium provides a correction, and only the surprise enters awareness as fresh information.",
    },
  },
  "simulation-decomposition": {
    id: "simulation-decomposition",
    tex: "\\mathcal{S}_i \\;=\\; \\mathcal{P}_i \\,\\cup\\, \\mathcal{A}_i",
    tooltip: {
      pronunciation:
        "S-script sub i equals P-script sub i union A-script sub i",
      symbols:
        "$\\mathcal{S}_i$ is the simulation; $\\mathcal{P}_i$ is the endogenous percepts; $\\mathcal{A}_i$ is the abstract operations; $\\cup$ is set union.",
      context:
        "The simulation decomposes into two branches: $\\mathcal{P}_i$ (perceptual machinery running internally &mdash; memory replay, fantasy, mental imagery) and $\\mathcal{A}_i$ (symbolic and relational machinery &mdash; counting, inferring, deriving). Different machinery, both producing internal model-content.",
    },
  },
  "percepts-abstract-coupling": {
    id: "percepts-abstract-coupling",
    tex: "\\mathcal{P}_i \\;\\longleftrightarrow\\; \\mathcal{A}_i",
    tooltip: {
      pronunciation:
        "P-script sub i is in two-way coupling with A-script sub i",
      symbols:
        "$\\mathcal{P}_i$ is the endogenous percepts; $\\mathcal{A}_i$ is the abstract operations; $\\longleftrightarrow$ marks constant two-way exchange between them.",
      context:
        "The two branches of $\\mathcal{S}_i$ are tightly coupled in use. Abstract operations recruit endogenous percepts as scaffolding (sketches, inner speech, felt structure). Endogenous percepts get re-shaped by abstract operations (a diagram, once understood, stays understood). Most lived thinking is a hybrid.",
    },
  },
  "world-within-loop": {
    id: "world-within-loop",
    tex: "\\sigma_i \\;\\longrightarrow\\; \\mathcal{S}_i \\;\\longrightarrow\\; \\hat{w}_i \\;\\longrightarrow\\; \\mathcal{S}_i \\;\\longrightarrow\\; \\ldots",
    tooltip: {
      pronunciation:
        "sigma sub i arrow S-script sub i arrow w-hat sub i arrow S-script sub i arrow and so on",
      symbols:
        "$\\sigma_i$ is the sensorium; $\\mathcal{S}_i$ is the running simulation; $\\hat{w}_i$ is the standing model of $w$ that $i$ has accumulated; the arrows trace the order in which content flows.",
      context:
        "The feedback loop. Signal enters from $\\sigma_i$, gets deformed by $\\mathcal{S}_i$, sediments into $\\hat{w}_i$, and then $\\hat{w}_i$ shapes how $\\mathcal{S}_i$ deforms the next signal. Yesterday&rsquo;s deformation is today&rsquo;s prior; today&rsquo;s deformation lays down tomorrow&rsquo;s. The loop is what makes $\\hat{w}_i$ a moving target rather than a static record.",
    },
  },
  "self-in-world-model": {
    id: "self-in-world-model",
    tex: "\\hat{i}_i \\;\\subset\\; \\hat{w}_i",
    tooltip: {
      pronunciation:
        "i-hat sub i is a proper subset of w-hat sub i",
      symbols:
        "$\\hat{i}_i$ is the standing self-model &mdash; $i$&rsquo;s accumulated model of $i$; $\\hat{w}_i$ is the standing world-model; $\\subset$ is set inclusion.",
      context:
        "Since $i$ is a part of $w$ (proposition 3.1), $i$&rsquo;s model of $i$ is a region inside $i$&rsquo;s model of $w$. The self you experience is one neighbourhood inside the larger standing model. This is also the region $\\mathcal{S}_i$ samples most heavily &mdash; the loudest part of $\\hat{w}_i$ at runtime is the self.",
    },
  },
  "wound-cross-component": {
    id: "wound-cross-component",
    tex: "\\xi_i \\;\\subset\\; \\text{body}_i \\,\\cup\\, \\hat{w}_i \\,\\cup\\, \\hat{i}_i \\,\\cup\\, \\mathcal{S}_i",
    tooltip: {
      pronunciation:
        "xi sub i is a subset of body sub i union w-hat sub i union i-hat sub i union S-script sub i",
      symbols:
        "$\\xi_i$ is the wound; $\\text{body}_i$ is the bodily component of $i$; $\\hat{w}_i$ is the standing world-model; $\\hat{i}_i$ is the self-model; $\\mathcal{S}_i$ is the running simulation; $\\cup$ is set union; $\\subset$ is set inclusion.",
      context:
        "The wound is not contained in any single component &mdash; it is a pattern across components, with projections in each. Tissue-encoded in the body, priors in $\\hat{w}_i$ and $\\hat{i}_i$, activation patterns in $\\mathcal{S}_i$. Knitted together by injury and time, the projections act as a unit, which is why $\\xi_i$ feels like a thing rather than a scatter.",
    },
  },
  "wound-monotone": {
    id: "wound-monotone",
    tex: "\\frac{d\\xi_i}{dt} \\;\\geq\\; 0",
    tooltip: {
      pronunciation:
        "d xi sub i by d t is greater than or equal to zero",
      symbols:
        "$\\xi_i$ is the wound; $\\frac{d\\xi_i}{dt}$ is its rate of change in time; $\\geq 0$ says it does not decrease on its own.",
      context:
        "Without intervention, $\\xi_i$ only grows. Five mechanisms compose to produce the monotonicity: sensitization, avoidance, somatic encoding, narrative consolidation, and the stickiness of $\\hat{w}_i$. The same shape as the second law of thermodynamics ($\\frac{dS}{dt} \\geq 0$) and for the same reason &mdash; reversing the trend requires energy directed against it. Without that work, the wound calcifies.",
    },
  },
  "autonomic-configuration": {
    id: "autonomic-configuration",
    detail: {
      title: "Autonomic configuration",
      html: `
<p class="lead">
  The autonomic configuration is the patterned baseline of
  $i$&rsquo;s autonomic nervous system &mdash; the involuntary
  state the body settles into when nothing is acutely demanding
  otherwise. It is one of the deepest layers of
  $\\xi_i$ because it precedes thought, shapes what
  $\\mathcal{S}_i$ tends to generate, and is the substrate every
  emotion is built on.
</p>

<h3>What the autonomic nervous system is</h3>
<p>
  The autonomic nervous system (ANS) is the branch of the nervous
  system that runs the body without conscious control. Heart rate,
  breath rate, blood pressure, digestion, pupil dilation, sweat,
  immune activation, hormonal release, sexual response &mdash; all
  governed by the ANS. It is the operating system for the body,
  running below the surface of awareness.
</p>
<p>
  Classical physiology divides it into two branches that work in
  rough opposition:
</p>
<dl>
  <dt>Sympathetic.</dt>
  <dd>
    Mobilization. The fight-or-flight system. Increases heart
    rate, dilates pupils, redirects blood from gut to muscle,
    releases adrenaline. The body preparing to act on threat or
    opportunity.
  </dd>
  <dt>Parasympathetic.</dt>
  <dd>
    Recovery. Rest-and-digest. Slows heart rate, restores
    digestion, supports immune function, enables sleep and
    social connection. The body restoring itself.
  </dd>
</dl>

<h3>Polyvagal refinement</h3>
<p>
  Stephen Porges&rsquo;s polyvagal theory (1990s onward) splits the
  parasympathetic branch in two and gives a more accurate map of
  the states the body actually inhabits. Three configurations:
</p>
<dl>
  <dt>Ventral vagal &mdash; safe and social.</dt>
  <dd>
    Heart rate variable, breath full, face expressive, voice
    modulated, gut active, attention available for others. The
    state in which connection, play, learning, and creative work
    are possible. Mediated by the newer (mammalian) branch of
    the vagus nerve.
  </dd>
  <dt>Sympathetic &mdash; mobilized.</dt>
  <dd>
    Heart fast, breath shallow, muscles tense, attention
    narrowed to threat or task. Fight, flight, alarm, agitation,
    anxiety. Useful in acute danger; corrosive as a chronic
    baseline.
  </dd>
  <dt>Dorsal vagal &mdash; shutdown.</dt>
  <dd>
    Heart slow, breath shallow or held, muscles slack or frozen,
    affect flat, energy low, dissociation, numbness. The oldest
    response, evolved for predator encounters where escape
    failed. Useful as a last resort; devastating as a chronic
    baseline.
  </dd>
</dl>
<p>
  These three states are not feelings <em>about</em> the world.
  They are physiological configurations the body is <em>in</em>,
  out of which feelings, thoughts, and behaviours arise. The same
  $i$, in different autonomic states, perceives the same room
  differently.
</p>

<h3>What &ldquo;configuration&rdquo; means</h3>
<p>
  Every $i$ has a baseline autonomic state &mdash; the state the
  body returns to when no acute demand is present. For a
  well-regulated $i$ the baseline is ventral vagal: calm,
  available, responsive. The body moves into sympathetic when
  action is needed, into dorsal in genuine overwhelm, and back to
  ventral when the demand passes. The system is flexible.
</p>
<p>
  For an $i$ with significant $\\xi_i$, the baseline shifts. The
  body settles into sympathetic (chronic mobilization, anxiety,
  hypervigilance) or dorsal (chronic shutdown, fatigue,
  disconnection), or oscillates between them with little time in
  ventral. The system loses flexibility. The
  <em>configuration</em> &mdash; the home state the body returns
  to &mdash; has been re-set.
</p>

<h3>How it gets engrained</h3>
<p>
  Autonomic state is learned through repetition. Each time the
  body is held in a state &mdash; by external circumstance or by
  $\\mathcal{S}_i$&rsquo;s output &mdash; that state&rsquo;s
  neural and hormonal pathway is reinforced. The threshold to
  re-enter it lowers. After enough repetition, the body
  <em>defaults</em> to that state and requires effort to leave
  it.
</p>
<p>
  A childhood of unpredictable danger trains a sympathetic-dominant
  baseline: the body learns that the world is always-already a
  threat and pre-loads the response. A childhood of unmetabolizable
  overwhelm or unresponsive caregiving trains a dorsal-dominant
  baseline: the body learns that mobilization is futile and
  pre-loads collapse. Both are intelligent adaptations to the
  conditions in which they formed. Both calcify and outlive the
  conditions that produced them.
</p>

<h3>How it manifests</h3>
<dl>
  <dt>Sympathetic-dominant baseline.</dt>
  <dd>
    Chronic anxiety, restlessness, irritability, racing thoughts,
    difficulty sleeping or staying asleep, jaw clench, shallow
    fast breath, gut activation (cramping, diarrhea, nausea),
    hypervigilance, startle response. $\\mathcal{S}_i$ runs
    threat scenarios on a loop because the body is already shaped
    for them.
  </dd>
  <dt>Dorsal-dominant baseline.</dt>
  <dd>
    Chronic fatigue, low motivation, depressive flatness,
    dissociation, &ldquo;not really here&rdquo; quality, slow
    metabolism, immune suppression, difficulty feeling the body,
    sense of frozenness, social withdrawal, hopelessness.
    $\\mathcal{S}_i$ tends toward themes of futility, defeat,
    invisibility.
  </dd>
  <dt>Mixed / oscillating.</dt>
  <dd>
    The most common pattern for moderate-to-severe $\\xi_i$:
    bursts of sympathetic activation followed by dorsal collapse,
    with brief or absent visits to ventral. Anxiety into
    exhaustion into anxiety. The exhausting cycle of someone
    chronically out of regulation.
  </dd>
</dl>

<h3>Why it is the deepest layer of $\\xi_i$</h3>
<p>
  The autonomic configuration is <em>prior to</em> and
  <em>generative of</em> much of the cognitive and emotional
  content of $\\xi_i$. The body in sympathetic dominance
  <em>produces</em> threat-themed simulation; the body in dorsal
  dominance <em>produces</em> futility-themed simulation. You do
  not first think anxious thoughts and then become anxious; the
  autonomic state arrives first, and $\\mathcal{S}_i$ rationalizes
  the body it is sitting in.
</p>
<p>
  This is why purely cognitive work on $\\xi_i$ &mdash; insight,
  reframing, &ldquo;changing the thoughts&rdquo; &mdash; has
  limited reach. The thoughts are downstream of the state. The
  state is what wants tending.
</p>

<h3>What this means for the work</h3>
<p>
  Because the autonomic configuration is bodily, it can only be
  changed bodily. Practices that meet the body where it actually
  is &mdash; not where $\\mathcal{S}_i$ wishes it were &mdash;
  can re-train the baseline over time. The list is short and
  unglamorous:
</p>
<dl>
  <dt>Breath.</dt>
  <dd>
    Slow exhales engage the vagus and lower sympathetic arousal.
    The breath is the one autonomic process voluntarily
    accessible &mdash; the door into the rest.
  </dd>
  <dt>Movement.</dt>
  <dd>
    Discharges stored sympathetic activation (shaking,
    intentional exertion) and brings frozen tissue back online
    (yoga, somatic movement, dance). Sequence is everything &mdash;
    the body needs to complete the response it could not complete
    at the time of injury.
  </dd>
  <dt>Co-regulation.</dt>
  <dd>
    Other regulated nervous systems are the most powerful
    autonomic stimuli we have. Time with someone calmly present
    re-trains ventral access more efficiently than any solo
    practice. Mammals are wired to borrow regulation from each
    other.
  </dd>
  <dt>Sleep, nutrition, rhythm.</dt>
  <dd>
    The autonomic system depends on metabolic substrate. Sleep
    deprivation, glycemic instability, and circadian disruption
    push the baseline toward sympathetic. The unglamorous
    foundations of regulation.
  </dd>
  <dt>Direct vagal practice.</dt>
  <dd>
    Humming, gargling, cold exposure to the face, singing &mdash;
    practices that stimulate the vagus nerve directly. Small
    interventions, repeatable, additive.
  </dd>
</dl>

<p class="callout">
  Cognitive insight without somatic work leaves the autonomic
  configuration untouched and $\\xi_i$ intact at its deepest
  layer. Somatic work without insight changes the body but
  leaves the narratives that re-load it untouched. Both layers
  want work, in that order if forced to choose: the body first,
  because the body is what produces the room in which thinking
  happens.
</p>

<p class="aside-detail">
  The dance-floor moment in 12.4 is autonomic: a thread in the
  music landed in the body&rsquo;s pattern, the dorsal branch of
  the vagus fired, the muscles locked, the dance stopped. None
  of that was a thought. It was a configuration coming online.
</p>
`,
    },
  },

  "attention-subset": {
    id: "attention-subset",
    tex: "\\alpha_i \\;\\subset\\; i",
    tooltip: {
      pronunciation:
        "alpha sub i is a subset of i",
      symbols:
        "$\\alpha_i$ is the beam of attention &mdash; $i$&rsquo;s capacity to direct its own processing resources toward chosen content; $\\subset$ is set inclusion; $i$ is the questioner&rsquo;s worldline.",
      context:
        "$\\alpha_i$ is a capacity belonging to $i$ as a whole, not a smaller agent inside $i$. The only degree of freedom $i$ has, and the foothold every later move in the document depends on. Finite, directable, captureable, trainable.",
    },
  },
  "channel-clarity": {
    id: "channel-clarity",
    tex: "c_i \\;\\in\\; [0, 1]",
    tooltip: {
      pronunciation:
        "c sub i is in the closed interval from zero to one",
      symbols:
        "$c_i$ is channel clarity &mdash; the magnitude of $\\alpha_i$&rsquo;s penetration through $\\mathcal{S}_i$ toward $\\sigma_i$ on a normalized scale; $[0, 1]$ is the closed unit interval.",
      context:
        "$c_i = 0$ is full capture by $\\mathcal{S}_i$ &mdash; the deep imaginal. $c_i \\to 1$ is the asymptote of pure contact with $w$ via $\\sigma_i$ &mdash; never reached, always approached. Every $i$ lives somewhere on this axis at every moment.",
    },
  },
  "real-asymptote": {
    id: "real-asymptote",
    tex: "c_i \\;<\\; 1 \\quad \\forall\\, t",
    tooltip: {
      pronunciation:
        "c sub i is strictly less than one for all t",
      symbols:
        "$c_i$ is channel clarity; $\\forall\\, t$ means &ldquo;for all times.&rdquo; The strict inequality says clarity never reaches one.",
      context:
        "Pure unmediated contact with $w$ is unreachable. The sensorium narrows reality to a sliver, construction is unavoidable, and $\\hat{w}_i$&rsquo;s priors always shape what gets through. The real is an asymptote &mdash; a direction, not an arrival.",
    },
  },
  "real-doorway": {
    id: "real-doorway",
    tex: "\\alpha_i \\;\\longrightarrow\\; \\sigma_i \\;\\;\\Longrightarrow\\;\\; \\frac{dc_i}{dt} \\;>\\; 0",
    tooltip: {
      pronunciation:
        "alpha sub i directed at sigma sub i implies d c sub i by d t is positive",
      symbols:
        "$\\alpha_i \\to \\sigma_i$ means the beam is directed at the sensorium; $\\Longrightarrow$ is logical implication; $\\frac{dc_i}{dt} > 0$ means channel clarity is rising in time.",
      context:
        "The body is the doorway. Directing $\\alpha_i$ at any sensory anchor &mdash; breath, weight, sound, fingers on keys &mdash; raises channel clarity. The simulation is theme-shaped and abstract; the body is local and surface. When $\\alpha_i$ finds the surface, the channel cracks.",
    },
  },
  "real-threshold": {
    id: "real-threshold",
    tex: "c_i \\;\\geq\\; c_i^{\\,*} \\;\\;\\Longrightarrow\\;\\; \\text{signatures}_i",
    tooltip: {
      pronunciation:
        "c sub i greater than or equal to c sub i star implies signatures sub i",
      symbols:
        "$c_i$ is channel clarity; $c_i^{*}$ is the threshold above which experiential markers of the real arrive; $\\Longrightarrow$ is logical implication; $\\text{signatures}_i$ names the cluster of phenomena (vividness, beauty, well-being, the cool of not-pulled).",
      context:
        "Channel clarity is continuous, but the experiential signatures of the real do not arrive gradually &mdash; they kick in around some threshold. Below it, $i$ is still working at it. Above it, the state has its own coherence. The signatures are empirical markers, not metaphysical claims &mdash; what people consistently report when $c_i$ crosses over.",
    },
  },
  "real-counter-loop": {
    id: "real-counter-loop",
    tex: "\\alpha_i \\;\\to\\; \\sigma_i \\;\\to\\; \\text{body}_i^{\\,\\text{regulated}} \\;\\to\\; c_i^{\\,\\uparrow} \\;\\to\\; \\mathcal{S}_i^{\\,\\downarrow} \\;\\to\\; \\alpha_i^{\\,\\text{free}} \\;\\to\\; \\ldots",
    tooltip: {
      pronunciation:
        "alpha sub i to sigma sub i to regulated body to c sub i rising to S-script sub i falling to alpha sub i free, and so on",
      symbols:
        "Each arrow marks the next step in a virtuous cycle. Superscript arrows ($\\uparrow$, $\\downarrow$) mark increase or decrease; $\\text{body}_i^{\\,\\text{regulated}}$ is the body in a more ventral autonomic configuration; $\\alpha_i^{\\,\\text{free}}$ is attention not under capture.",
      context:
        "The reverse of the wound&rsquo;s vicious cycle from 12.7. Attention on the body regulates the autonomic configuration; the regulated body raises channel clarity; rising clarity thins the simulation; the thinner simulation frees more attention from capture. Each lap makes the next easier. Practiced often enough, recovery becomes faster than degradation.",
    },
  },
  "instrument-master-mode": {
    id: "instrument-master-mode",
    tex: "\\mathcal{S}_i \\;\\longrightarrow\\; \\alpha_i",
    tooltip: {
      pronunciation:
        "S-script sub i directed at alpha sub i",
      symbols:
        "$\\mathcal{S}_i$ is the running simulation; $\\alpha_i$ is the beam of attention; the arrow marks the direction of influence &mdash; simulation pulling attention.",
      context:
        "Master mode &mdash; the default. The simulation runs autonomously and captures $\\alpha_i$, often via $\\xi_i$&rsquo;s themes. Content is wound-tuned; $i$ inhabits the simulation as if it were $w$. This is the regime described from XII through XV before recruitment becomes possible.",
    },
  },
  "instrument-recruited-mode": {
    id: "instrument-recruited-mode",
    tex: "\\alpha_i \\;\\longrightarrow\\; \\mathcal{S}_i",
    tooltip: {
      pronunciation:
        "alpha sub i directed at S-script sub i",
      symbols:
        "$\\alpha_i$ is the beam of attention; $\\mathcal{S}_i$ is the simulation; the arrow marks the reversed direction of influence &mdash; attention directing simulation.",
      context:
        "Instrument mode. The trained condition: $\\alpha_i$ from the real directs $\\mathcal{S}_i$ toward chosen work. $\\mathcal{P}_i$ recruited for deliberate visualization; $\\mathcal{A}_i$ recruited for deliberate reasoning. Same machinery as master mode, opposite relation to $i$. The flipped arrow is what changes.",
    },
  },
  "instrument-condition": {
    id: "instrument-condition",
    tex: "c_i \\;\\geq\\; c_i^{\\,*} \\;\\;\\Longrightarrow\\;\\; \\text{instrument mode available}",
    tooltip: {
      pronunciation:
        "c sub i greater than or equal to c sub i star implies instrument mode is available",
      symbols:
        "$c_i$ is channel clarity from XV; $c_i^{*}$ is the threshold for the signatures of the real; $\\Longrightarrow$ is logical implication.",
      context:
        "Recruitment requires the real. Below threshold, what looks like instrument mode is $\\xi_i$-driven activity wearing the clothes of work &mdash; planning that is catastrophizing, visualization that is worst-case rehearsal. Above threshold, the flipped arrow holds and the simulation can be wielded as tool. The signatures (vividness, beauty, well-being, the cool of not-pulled) are the empirical test that threshold has been crossed.",
    },
  },
  "instrument-pulse": {
    id: "instrument-pulse",
    tex: "\\alpha_i \\;\\to\\; \\sigma_i \\;\\;\\text{pulse} \\;\\;\\to\\;\\; \\alpha_i \\;\\to\\; \\mathcal{S}_i",
    tooltip: {
      pronunciation:
        "alpha sub i to sigma sub i, pulse, then alpha sub i back to S-script sub i",
      symbols:
        "$\\alpha_i \\to \\sigma_i$ is attention returned to the doorway; <em>pulse</em> marks a discrete return to the body-anchor; $\\alpha_i \\to \\mathcal{S}_i$ is resumption of instrument mode from re-cleaned channel.",
      context:
        "The hijack defence. While the instrument runs, $\\alpha_i$ stays partly tethered to $\\sigma_i$ &mdash; body, breath, surroundings. Drift, return. Drift, return. The body-anchor catches $\\xi_i$-takeover before it consolidates. When the &ldquo;planning&rdquo; has slid into worry, the return reveals it; raise $c_i$ again, then resume. Non-optional &mdash; an instrument run without periodic anchoring will, given time, be hijacked whether $i$ notices or not.",
    },
  },
  "wound-saturation": {
    id: "wound-saturation",
    detail: {
      title: "The wound's saturation strategy",
      html: `
<p class="lead">
  $\\xi_i$ does not win by being big. It wins by being
  <em>concentrated</em>. The wound has a small set of recurring
  themes, returns to them with extreme reliability, and uses this
  narrowness as a weapon against $\\alpha_i$. Understanding the
  mechanism is what makes the Hinkie counter-strategy
  intelligible.
</p>

<h3>The two halves of the claim</h3>

<p>
  <em>Saturating $\\alpha_i$.</em> Filling the beam. From XIV:
  $\\alpha_i$ is finite, one-at-a-time, and energetic to hold
  against a pull. If something captures it for the full duration
  of a moment, no other content is being attended. The captured
  target gets 100% of the available beam.
</p>

<p>
  <em>Concentration on a small number of obsessions.</em> The
  wound does not spread itself across all twelve houses or all of
  $w$. It has a small repertoire of <em>themes</em>, and it
  returns to them with extreme reliability.
</p>

<h3>What the themes are</h3>

<p>
  Every $\\xi_i$ has specific content &mdash; laid down by
  12.2&rsquo;s three streams (direct harm, attributes of $w$,
  inheritance) and calcified by 12.3&rsquo;s five mechanisms
  (sensitization, avoidance, somatic encoding, narrative
  consolidation, stickiness). The content is <em>thematic</em>,
  not random.
</p>

<p>
  For one $i$, the themes might be:
</p>

<dl>
  <dt><em>I am unlovable.</em></dt>
  <dd>Belief about how others will see and treat $i$.</dd>
  <dt><em>They will leave.</em></dt>
  <dd>Prediction about every intimate bond.</dd>
  <dt><em>I will be exposed as defective.</em></dt>
  <dd>Fear that any close inspection reveals what is broken.</dd>
</dl>

<p>
  For another $i$, the themes might be entirely different:
  <em>I am inferior. I missed my chance. I am too late.</em>
  Three to five recurring themes is typical. They <em>interlock</em>
  &mdash; abandonment hooked to defectiveness hooked to inferiority
  &mdash; forming a small ecosystem that pulls $\\alpha_i$ in
  regardless of where it started.
</p>

<h3>Why narrowness is the weapon, not weakness</h3>

<p>
  Imagine a diffuse $\\xi_i$ that worried equally about everything
  in $w$ &mdash; generic low-amplitude anxiety across all subjects.
  Such a wound would be <em>weak</em>: each theme would compete
  with every other for $\\alpha_i$, none would reach the amplitude
  needed for autonomic activation, and the body would never enter
  the sympathetic or dorsal patterns that lock the loop in place.
  The whole structure would dissolve into noise.
</p>

<p>
  The actual $\\xi_i$ is the opposite. A small set of
  <em>high-amplitude attractors</em> &mdash; themes deeply grooved,
  dependably activated, emotionally saturating when they fire.
  Concentration gives them the amplitude that thresholded systems
  (the
  <a class="eq-ref" data-eq="autonomic-configuration">autonomic
  body</a>, the simulation, attention) require to engage at full
  intensity.
</p>

<p class="callout">
  The narrowness is the efficiency. Concentrated force on a narrow
  front, deeply familiar terrain, repeatedly engaged. This is how
  small adversaries defeat much larger systems &mdash; not by
  matching surface area, but by concentrating force where the
  defender cannot match it.
</p>

<h3>How this attacks $\\alpha_i$ specifically</h3>

<p>
  Between intentional deployments &mdash; between sentences,
  between tasks, in any pause &mdash; $\\alpha_i$ does not stay
  neutral. The default is capture by the loudest content available
  (13.2). For an $i$ with significant $\\xi_i$, the loudest
  available content is always one of the wound&rsquo;s themes.
</p>

<p>
  The themes function as <em>high-gravity attractors</em> in the
  field of attention: any $\\alpha_i$ that drifts near them is
  pulled in. Once captured, $\\alpha_i$ sustains the theme. The
  body responds physiologically. The simulation generates more
  wound-tuned content. The capture deepens. Every minute
  $\\alpha_i$ spends on a theme deepens the groove and makes the
  next capture more likely.
</p>

<p>
  <strong>The saturation is not a single moment of dominance but
  the cumulative monopoly of $\\alpha_i$ over hours, days, years.</strong>
</p>

<p>
  Rumination is the visible form. The endless replay of the same
  conversation, the same regret, the same fear. The repetitiveness
  is not a bug; it is the saturation strategy at work.
</p>

<h3>The counter-strategy: dispersion</h3>

<p>
  If concentration is the wound&rsquo;s weapon, dispersion is the
  defence. Distribute $\\alpha_i$ across the twelve houses, and the
  calculus changes.
</p>

<dl>
  <dt>$\\alpha_i$ has twelve surfaces to land on between deployments.</dt>
  <dd>
    The wound&rsquo;s themes are no longer the only available
    attractors; they compete with eleven other terrains.
  </dd>
  <dt>The themes do not disappear, but they lose their monopoly.</dt>
  <dd>
    Still present, still occasionally activating, but no longer the
    gravitational centre of attention.
  </dd>
  <dt>Capture chains can be broken before saturation completes.</dt>
  <dd>
    When capture happens, redirecting $\\alpha_i$ to another house
    interrupts the rumination cycle before the cumulative monopoly
    consolidates.
  </dd>
  <dt>Each house becomes an anti-attractor.</dt>
  <dd>
    A place the wound has not colonized, where $\\alpha_i$ can go
    and stay productive without being pulled back.
  </dd>
</dl>

<p>
  Same logic as guerrilla warfare against a concentrated army. A
  single battle on the army&rsquo;s chosen ground is a loss. But
  twelve dispersed terrains, each defended by activity that is not
  the wound, deny the army its single decisive engagement.
  $\\xi_i$ wants $i$ concentrated on its narrow front. The houses
  build twelve fronts of $i$&rsquo;s own, on terrain the wound has
  not prepared.
</p>

<h3>Why &ldquo;just stop thinking about it&rdquo; fails</h3>

<p>
  The folk advice (also some clinical advice) is: when the
  wound&rsquo;s themes activate, just <em>stop</em> attending to
  them. Redirect. Don&rsquo;t engage.
</p>

<p>
  This fails for a precise reason. You cannot will $\\alpha_i$ off
  the wound&rsquo;s themes <em>while $\\alpha_i$ is already
  captured by them</em> &mdash; that is what capture <em>means</em>.
  The very faculty that would do the redirecting is the faculty
  currently saturated. Telling someone in capture to redirect is
  like telling someone drowning to swim.
</p>

<p>
  The intervention has to be <em>structural</em>: change what
  surfaces are available for $\\alpha_i$ to land on, ahead of
  time. Build the twelve houses, tend their thresholds, sustain
  the practices that strengthen $\\alpha_i$ at the body level.
  Then, when capture happens, the redirect has somewhere to go.
  The themes do not vanish; they become one terrain among twelve
  instead of the only terrain.
</p>

<p class="callout">
  The architectural insight: do not fight the wound on its terms.
  Build the life it has to operate inside. Let the life crowd it
  out.
</p>

<p class="aside-detail">
  This page operationalizes three claims from earlier sections:
  12.7 (the wound&rsquo;s self-accelerating loop), 13.2 (default
  capture of $\\alpha_i$), and 15.5 (the Hinkie stance). What all
  three share is the recognition that $\\xi_i$ is an adversary
  with a strategy, not a background condition. Understanding the
  strategy is what makes defence intelligible.
</p>
`,
    },
  },

  "work-two-levels": {
    id: "work-two-levels",
    tex: "\\alpha_i \\;=\\; 0 \\;\\;\\not\\Rightarrow\\;\\; \\text{work}_i \\;=\\; 0",
    tooltip: {
      pronunciation:
        "alpha sub i equals zero does not imply work sub i equals zero",
      symbols:
        "$\\alpha_i = 0$ means the beam of attention is at rest (no intentional deployment); $\\not\\Rightarrow$ is &ldquo;does not imply&rdquo;; $\\text{work}_i = 0$ would mean all work has ceased.",
      context:
        "There are two levels of work: intentional ($\\alpha_i$-driven) and autonomic (body-driven). When intentional work goes to zero, body work continues at full intensity. Heart, kidneys, immune system, cellular repair, memory consolidation, hormonal regulation &mdash; all continuous while alive. Rest is not absence of work but prioritization of body work over intentional work. Sleep is the most demanding work the body does.",
    },
  },
  "houses-set": {
    id: "houses-set",
    tex: "\\mathcal{H} \\;=\\; \\{\\,\\mathcal{H}_{\\mathrm{I}},\\; \\mathcal{H}_{\\mathrm{II}},\\; \\ldots,\\; \\mathcal{H}_{\\mathrm{XII}}\\,\\}",
    tooltip: {
      pronunciation:
        "H-script equals the set containing H-script sub one through H-script sub twelve",
      symbols:
        "$\\mathcal{H}$ is the set of all work-houses; $\\mathcal{H}_k$ is the $k$-th house for $k$ running over the Roman numerals I through XII.",
      context:
        "Twelve houses, named in Latin: Corpus, Animus, Tempus, Domus, Patrimonium, Opus, Ars, Studium, Vinculum, Polis, Naturum, Ludus. Each is a domain of work-activity defined by its scope; together they exhaust what a human has to do well to flourish.",
    },
  },
  "alpha-in-house": {
    id: "alpha-in-house",
    tex: "\\alpha_i(t) \\;\\in\\; \\mathcal{H}_k \\;\\;\\text{for some unique } k",
    tooltip: {
      pronunciation:
        "alpha sub i of t is in H-script sub k for some unique k",
      symbols:
        "$\\alpha_i(t)$ is the beam of attention at time $t$; $\\mathcal{H}_k$ is the $k$-th house; the &ldquo;some unique $k$&rdquo; clause enforces the one-at-a-time constraint.",
      context:
        "At any moment, $\\alpha_i$ is deployed to exactly one house. Attention cannot be split across houses simultaneously; allocation across houses is a temporal phenomenon, not a parallel one. Over time, the deployment pattern forms an allocation profile $\\mu_i$.",
    },
  },
  "allocation-profile": {
    id: "allocation-profile",
    tex: "\\mu_i: \\mathcal{H} \\to [0, 1], \\quad \\sum_{k=\\mathrm{I}}^{\\mathrm{XII}} \\mu_i(\\mathcal{H}_k) \\;=\\; 1",
    tooltip: {
      pronunciation:
        "mu sub i is a function from H-script to the closed unit interval, with the sum over k from I to XII of mu sub i of H-script sub k equal to one",
      symbols:
        "$\\mu_i$ is $i$&rsquo;s allocation profile &mdash; the fraction of $\\alpha_i$ deployed to each house over a time window; the sum-to-one constraint says all the attention $i$ has goes somewhere among the twelve.",
      context:
        "$\\mu_i$ is a probability distribution over the houses. The shape of a life is the shape of its $\\mu_i$. Different $i$&rsquo;s have radically different profiles; the same $i$ at different life stages has different profiles. The profile is the first place neglect shows: a house at near-zero is in slow collapse.",
    },
  },
  "maintenance-threshold": {
    id: "maintenance-threshold",
    tex: "\\mu_i(\\mathcal{H}_k) \\;\\geq\\; m_k",
    tooltip: {
      pronunciation:
        "mu sub i of H-script sub k is greater than or equal to m sub k",
      symbols:
        "$\\mu_i(\\mathcal{H}_k)$ is the allocation to house $k$; $m_k$ is house $k$&rsquo;s maintenance threshold &mdash; the floor below which the house begins to degrade.",
      context:
        "Each house has a non-zero minimum allocation it needs to avoid decay. Sleep too little, the body breaks. Skip relationship maintenance, the bonds wither. The thresholds are real and house-specific. The houses are also coupled: decay in one bleeds into the others, so below threshold in one becomes, in time, below threshold in all.",
    },
  },
  "hinkie-stance": {
    id: "hinkie-stance",
    tex: "\\mu_i(\\mathcal{H}_k) \\;>\\; 0 \\quad \\forall\\, k",
    tooltip: {
      pronunciation:
        "mu sub i of H-script sub k is strictly greater than zero for all k",
      symbols:
        "$\\mu_i(\\mathcal{H}_k)$ is the allocation to house $k$; $>0$ is strict positivity; $\\forall\\, k$ means &ldquo;for every house.&rdquo;",
      context:
        "The Hinkie stance: don&rsquo;t optimize any single house; don&rsquo;t neglect any. Marginal compounding gains across twelve dimensions outperform heroic gains in one, because the latter typically come at the cost of another house&rsquo;s threshold. Also an anti-$\\xi_i$ strategy &mdash; the wound wins by concentration, so distributing $\\alpha_i$ across twelve fronts denies it the saturation it needs.",
    },
  },
  "flourishing-function": {
    id: "flourishing-function",
    tex: "F: \\mu_i \\;\\mapsto\\; \\mathbb{R}_{\\geq 0}",
    tooltip: {
      pronunciation:
        "F maps mu sub i to the non-negative reals",
      symbols:
        "$F$ is the flourishing function; $\\mu_i$ is $i$&rsquo;s allocation profile; $\\mathbb{R}_{\\geq 0}$ is the set of non-negative real numbers.",
      context:
        "Flourishing is a function of the allocation profile, not of any single house. Two properties characterize it: threshold collapse (any house below $m_k$ sends $F$ toward zero) and diminishing returns above threshold (additional allocation past $m_k$ helps less and less). Two consequences follow: flourishing is bounded above by the weakest house, and the work is portfolio work rather than specialist work.",
    },
  },
  "threshold-collapse": {
    id: "threshold-collapse",
    tex: "\\exists\\, k : \\mu_i(\\mathcal{H}_k) < m_k \\;\\;\\Longrightarrow\\;\\; F(\\mu_i) \\to 0",
    tooltip: {
      pronunciation:
        "there exists a k such that mu sub i of H-script sub k is less than m sub k implies F of mu sub i goes to zero",
      symbols:
        "$\\exists\\, k$ is &ldquo;there exists some house $k$&rdquo;; $\\mu_i(\\mathcal{H}_k) < m_k$ is &ldquo;allocation to that house falls below threshold&rdquo;; $\\Longrightarrow$ is logical implication; $F(\\mu_i) \\to 0$ is &ldquo;flourishing collapses to zero.&rdquo;",
      context:
        "If any single house falls below its maintenance threshold, flourishing collapses regardless of how strong the other houses are. Flourishing is not an average across houses; it is closer to a product, and any single zero zeroes it out. This is the architectural backing for the Hinkie stance: tend all twelve, because losing any one of them takes down the whole.",
    },
  },
  "simulation-proper-subset": {
    id: "simulation-proper-subset",
    tex: "\\mathcal{S}_i \\;\\subsetneq\\; i",
    tooltip: {
      pronunciation:
        "S-script sub i is a proper subset of i",
      symbols:
        "$\\mathcal{S}_i$ is the running simulation; $i$ is the questioner&rsquo;s worldline; $\\subsetneq$ is proper inclusion &mdash; $\\mathcal{S}_i$ is strictly smaller than $i$.",
      context:
        "The architectural fact behind the stance. The simulation is a proper part of $i$, not all of $i$. When $\\alpha_i$ illuminates $\\mathcal{S}_i$, what holds the illumination is what is left of $i$ after $\\mathcal{S}_i$ has been set aside as an object. This is what makes &ldquo;yeah, there it is&rdquo; possible &mdash; the simulation is a thing $i$ has, not what $i$ is.",
    },
  },
  "attention-contest": {
    id: "attention-contest",
    tex: "\\alpha_i \\;\\rightleftarrows\\; \\mathcal{S}_i",
    tooltip: {
      pronunciation:
        "alpha sub i in tension with S-script sub i",
      symbols:
        "$\\alpha_i$ is the beam of attention; $\\mathcal{S}_i$ is the running simulation; $\\rightleftarrows$ marks the bidirectional contest of strengths between them at every moment.",
      context:
        "At any moment, what $i$ actually meets is the outcome of this contest. When $\\alpha_i$ is thick and $\\mathcal{S}_i$ thin, the beam pierces and $\\sigma_i$ becomes available. When $\\alpha_i$ is thin and $\\mathcal{S}_i$ thick &mdash; fatigue plus $\\xi_i$ activation &mdash; the beam stays captured no matter how much $i$ &ldquo;tries.&rdquo; Body state largely determines $\\alpha_i$&rsquo;s daily strength.",
    },
  },
  "wound-loop": {
    id: "wound-loop",
    tex: "\\xi_i \\;\\longrightarrow\\; \\mathcal{S}_i \\;\\longrightarrow\\; \\text{body}_i \\;\\longrightarrow\\; \\xi_i \\;\\longrightarrow\\; \\ldots",
    tooltip: {
      pronunciation:
        "xi sub i arrow S-script sub i arrow body sub i arrow xi sub i arrow and so on",
      symbols:
        "$\\xi_i$ is the wound; $\\mathcal{S}_i$ is the running simulation; $\\text{body}_i$ is the bodily component of $i$; the arrows trace the order of influence in the self-reinforcing loop.",
      context:
        "The self-accelerating cycle. $\\xi_i$ tunes $\\mathcal{S}_i$ toward threat content; $\\mathcal{S}_i$ output triggers autonomic activation in the body; chronic activation damages the body and lays down more $\\xi_i$. Each lap deepens the next. Without intervention, the loop runs unchecked and the territory available to $i$ contracts year over year.",
    },
  },
  "sensorium-map": {
    id: "sensorium-map",
    tex: "\\sigma_i \\;:\\; w \\to \\text{percepts}",
    tooltip: {
      pronunciation:
        "sigma sub i is a function from w to percepts",
      symbols:
        "$\\sigma_i$ as a mapping from the world to $i$&rsquo;s perceptual space. The colon-and-arrow notation means &ldquo;function from $w$ to percepts.&rdquo;",
      context:
        "What you experience as &ldquo;the world&rdquo; is not $w$ raw but $\\sigma_i$&rsquo;s reading of it &mdash; mediated by narrow sensor bands, inferential construction, and prior expectations. You never touch $w$ directly. You touch your construction of $w$.",
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
  "wave-speed-formula": {
    id: "wave-speed-formula",
    detail: {
      title: "The wave-speed formula",
      html: `
<p class="lead">
  A pressure wave&rsquo;s speed is set by two properties of the
  medium: how <em>stiff</em> it is (how strongly it pushes back
  when compressed) and how <em>dense</em> it is (how much mass per
  unit volume). The formula:
</p>

$$v \\;=\\; \\sqrt{\\frac{K}{\\rho}}$$

<p>
  Here $K$ is an <em>elastic modulus</em> (a measure of stiffness)
  and $\\rho$ is density. Stiffer media transmit waves faster;
  denser media transmit them slower. Why this shape?
</p>

<h3>The mass-and-spring picture</h3>
<p>
  Imagine the medium as a chain of small masses connected by
  springs:
</p>

<figure class="wave-figure">
  <svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A row of masses connected by springs, with a compression pulse in the middle moving right">
    <text x="300" y="22" text-anchor="middle" font-family="EB Garamond, Georgia, serif" font-style="italic" font-size="13" fill="#8a8275">a row of masses connected by springs</text>

    <g transform="translate(0, 100)">
      <g stroke="#5a544c" stroke-width="2" fill="none">
        <path d="M 92 0 q 6 -7 12 0 q 6 7 12 0 q 6 -7 12 0 q 6 7 12 0"/>
        <path d="M 152 0 q 6 -7 12 0 q 6 7 12 0 q 6 -7 12 0 q 6 7 12 0"/>
      </g>
      <g stroke="#d97a4a" stroke-width="2.5" fill="none">
        <path d="M 212 0 q 4 -7 8 0 q 4 7 8 0 q 4 -7 8 0"/>
        <path d="M 252 0 q 4 -7 8 0 q 4 7 8 0 q 4 -7 8 0"/>
        <path d="M 292 0 q 4 -7 8 0 q 4 7 8 0 q 4 -7 8 0"/>
      </g>
      <g stroke="#5a544c" stroke-width="2" fill="none">
        <path d="M 332 0 q 6 -7 12 0 q 6 7 12 0 q 6 -7 12 0 q 6 7 12 0"/>
        <path d="M 392 0 q 6 -7 12 0 q 6 7 12 0 q 6 -7 12 0 q 6 7 12 0"/>
        <path d="M 452 0 q 6 -7 12 0 q 6 7 12 0 q 6 -7 12 0 q 6 7 12 0"/>
      </g>

      <g stroke="#14110d" stroke-width="1.5">
        <circle cx="80" cy="0" r="11" fill="#ebe4d4"/>
        <circle cx="140" cy="0" r="11" fill="#ebe4d4"/>
        <circle cx="200" cy="0" r="11" fill="#d97a4a"/>
        <circle cx="240" cy="0" r="11" fill="#d97a4a"/>
        <circle cx="280" cy="0" r="11" fill="#d97a4a"/>
        <circle cx="320" cy="0" r="11" fill="#d97a4a"/>
        <circle cx="380" cy="0" r="11" fill="#ebe4d4"/>
        <circle cx="440" cy="0" r="11" fill="#ebe4d4"/>
        <circle cx="500" cy="0" r="11" fill="#ebe4d4"/>
      </g>
    </g>

    <g transform="translate(0, 155)" font-family="EB Garamond, Georgia, serif" font-style="italic" font-size="13" fill="#d97a4a">
      <text x="260" y="0" text-anchor="middle">compression pulse</text>
      <path d="M 330 -4 L 360 -4 M 354 -9 L 360 -4 L 354 1" stroke="#d97a4a" stroke-width="1.5" fill="none"/>
    </g>

    <g transform="translate(0, 190)" font-family="EB Garamond, Georgia, serif" font-style="italic" font-size="12" fill="#8a8275">
      <text x="125" y="0" text-anchor="middle">$K$ (spring stiffness)</text>
      <text x="475" y="0" text-anchor="middle">$\\rho$ (mass per length)</text>
    </g>
  </svg>
  <figcaption>
    When one mass is pushed, its spring compresses, the spring
    pushes the next mass, that mass compresses the next spring, and
    so on. The wave is this disturbance travelling down the chain.
  </figcaption>
</figure>

<h3>Why stiffness speeds the wave</h3>
<p>
  Stiffness $K$ controls how strongly the spring pushes back when
  compressed. A stiff spring snaps back fast; a loose spring lazily
  drifts back. Faster snap-back means each mass starts moving
  sooner, which means the next mass starts moving sooner, which
  means the wave reaches the end sooner. <strong>Stiffer &rArr;
  faster.</strong>
</p>

<h3>Why density slows the wave</h3>
<p>
  Density $\\rho$ controls how much mass each spring has to move.
  A heavy mass accelerates slowly even when pushed hard (it has
  more inertia). Light masses respond quickly to the same force.
  <strong>Heavier &rArr; slower.</strong>
</p>

<h3>Why the square root</h3>
<p>
  Newton&rsquo;s second law applied to each mass in the chain
  gives $F = m\\,a$. The spring force depends on compression
  (Hooke&rsquo;s law, $F = -K x$). Setting these equal and looking
  for wavelike solutions yields the wave equation, whose
  propagation speed is exactly $\\sqrt{K/\\rho}$.
</p>
<p>
  The square root falls out because the wave equation has $v^{2}$
  in it, not $v$ &mdash; the equations of motion are second-order
  in time and second-order in space. You can also feel it
  intuitively: doubling stiffness doesn&rsquo;t double the speed,
  it multiplies it by $\\sqrt{2}$, because the spring drives a
  whole succession of masses, and the per-mass acceleration
  benefit compounds geometrically rather than linearly.
</p>

<h3>Real-world numbers</h3>
<p>Plugging in measured values for $K$ (the bulk modulus) and $\\rho$:</p>
<dl>
  <dt>Air at room temperature.</dt>
  <dd>
    <span
      data-tt-say="Air: bulk modulus 1.4 times 10 to the 5 pascals; density 1.2 kilograms per cubic metre; speed approximately 343 metres per second"
      data-tt-sym="$K \\approx 1.4 \\times 10^{5}$ Pa (relatively compressible); $\\rho \\approx 1.2$ kg/m³ (light); $v \\approx 343$ m/s."
      data-tt-ctx="The familiar speed of sound in air. Air is easy to compress and very light, so although its stiffness is small, its density is small too &mdash; the ratio gives a modest but real speed. This is the speed at which a clap reaches a listener and the speed lightning&rsquo;s thunder lags behind the flash."
    >$K \\approx 1.4 \\times 10^{5}$ Pa,
    $\\rho \\approx 1.2$ kg/m³ &rArr; $v \\approx 343$ m/s.</span>
  </dd>
  <dt>Water.</dt>
  <dd>
    <span
      data-tt-say="Water: bulk modulus 2.2 times 10 to the 9 pascals; density 1000 kilograms per cubic metre; speed approximately 1500 metres per second"
      data-tt-sym="$K \\approx 2.2 \\times 10^{9}$ Pa (much stiffer than air); $\\rho \\approx 1000$ kg/m³ (much denser); $v \\approx 1{,}500$ m/s."
      data-tt-ctx="Water is roughly $15{,}000\\times$ stiffer than air and about $800\\times$ denser. Stiffness wins on the square root, so sound travels in water about four times faster than in air. Whales and dolphins exploit this for long-range communication."
    >$K \\approx 2.2 \\times 10^{9}$ Pa, $\\rho \\approx 1000$ kg/m³
    &rArr; $v \\approx 1{,}500$ m/s.</span>
  </dd>
  <dt>Steel.</dt>
  <dd>
    <span
      data-tt-say="Steel: Young's modulus approximately 2 times 10 to the 11 pascals; density 7850 kilograms per cubic metre; speed approximately 5000 metres per second"
      data-tt-sym="Young&rsquo;s modulus $\\approx 2 \\times 10^{11}$ Pa (extremely stiff); $\\rho \\approx 7850$ kg/m³ (heavy); $v \\approx 5{,}000$ m/s."
      data-tt-ctx="Steel is over a million times stiffer than air but only about $6{,}500\\times$ denser. The huge stiffness advantage wins by a wide margin; pressure waves rip through steel at about $15\\times$ the speed of sound in air. This is why a hammer-strike on a long steel rail can be heard pressing your ear to the rail before it arrives through air."
    >Young&rsquo;s modulus $\\approx 2 \\times 10^{11}$ Pa,
    $\\rho \\approx 7850$ kg/m³ &rArr; $v \\approx 5{,}000$ m/s.</span>
  </dd>
</dl>
<p>
  Steel is over a million times stiffer than air, but only about
  $6{,}500$ times denser. Stiffness wins by a wide margin, but the
  square root tames the ratio: steel transmits pressure waves
  about $15\\times$ faster than air, not a million times faster.
</p>

<p class="aside-detail">
  The same formula shape appears across physics. Tension and
  linear mass density set the speed of waves on a string. Shear
  modulus and density set the speed of shear waves in solids. The
  pattern: <strong>speed is the square root of restoring strength
  over inertia.</strong> Stiffness fights, mass resists, the wave
  is what comes out of their negotiation.
</p>
`,
    },
  },

  "pressure-waves": {
    id: "pressure-waves",
    detail: {
      title: "Pressure waves",
      html: `
<p class="lead">
  A pressure wave is a propagating disturbance in the local pressure
  of a medium &mdash; a region where the medium is momentarily
  compressed (higher density and pressure) followed by a region
  where it is rarefied (lower density and pressure), with this
  pattern travelling outward from a source.
</p>

<h3>Mechanism</h3>
<p>
  Unlike
  <a class="eq-ref" data-eq="em-radiation">electromagnetic
  radiation</a>, a pressure wave needs a medium &mdash; a gas,
  liquid, or solid &mdash; because it propagates by mechanical
  interaction. Each parcel of the medium pushes on its neighbour,
  which pushes on <em>its</em> neighbour, and so on. The disturbance
  moves through the medium, but the medium itself does not travel
  along with it. Particles oscillate around their resting positions
  and pass energy along.
</p>

<h3>Longitudinal character</h3>
<p>
  Pressure waves are <em>longitudinal</em>: the oscillation of the
  medium is parallel to the direction of propagation, not
  perpendicular to it. This distinguishes them from transverse
  waves (like light, or like the shear waves that can travel through
  solids). Sound in air is the canonical example &mdash; a sequence
  of compressions and rarefactions moving outward.
</p>

<h3>Speed</h3>
<p>
  The speed depends on the medium&rsquo;s stiffness and density
  &mdash; specifically,
  <a class="eq-ref" data-eq="wave-speed-formula">the square root of
  the ratio of an elastic modulus to density</a>. Stiffer, less
  dense media transmit pressure waves faster.
</p>
<dl>
  <dt>Air at room temperature</dt>
  <dd>about $343$ m/s</dd>
  <dt>Water</dt>
  <dd>about $1{,}500$ m/s</dd>
  <dt>Steel</dt>
  <dd>about $5{,}000$ m/s</dd>
</dl>

<h3>Place in $w$</h3>
<p>
  <em>As a constituent.</em> Pressure waves are not fundamental
  entities of $w$ in the way the electromagnetic field is. They are
  <em>patterns in the behaviour of matter</em> &mdash; collective,
  emergent phenomena of large numbers of particles interacting.
  Strip away the medium and there is no wave. Pressure waves are
  ontologically dependent on matter in a way EM radiation is not on
  anything.
</p>
<p>
  <em>As a relation.</em> A pressure wave is a way that one region
  of matter influences another through the intervening medium
  &mdash; mechanical causation at a distance, mediated step by
  step.
</p>
<p>
  <em>As a carrier of information.</em> Within $w$, pressure waves
  are a major channel by which spatially separated parts of the
  world inform one another &mdash; hearing, echolocation, sonar,
  seismology. Almost everything organisms know about their
  immediate acoustic environment arrives as pressure waves.
  Seismic pressure waves are one of the few probes we have of the
  deep interior of the Earth.
</p>
<p>
  <em>As lawful behaviour.</em> Governed by the wave equation
  derived from the equations of continuum mechanics
  (Euler&rsquo;s equations for fluids, or the elastic wave
  equations for solids), which are themselves derivable from the
  more fundamental dynamics of the constituent particles.
</p>

<h3>Range</h3>
<p>
  The audible band for humans is roughly $20$ Hz to $20$ kHz, but
  pressure waves extend far beyond this in both directions.
</p>
<dl>
  <dt>Infrasound (below $20$ Hz).</dt>
  <dd>
    Elephants, whales, earthquakes, atmospheric disturbances.
  </dd>
  <dt>Ultrasound (above $20$ kHz).</dt>
  <dd>Bats, medical imaging, industrial cleaning.</dd>
</dl>
<p>
  At extremely high amplitudes the linear wave equation breaks down
  and you get <em>shock waves</em> &mdash; nonlinear discontinuities
  where the leading edge of the compression catches up with itself.
</p>

<p class="callout">
  Pressure waves contrast cleanly with electromagnetic radiation
  along the medium / no-medium axis. EM radiation propagates
  through vacuum; pressure waves require matter to exist at all.
  One is the world&rsquo;s primary long-range carrier; the other,
  the world&rsquo;s short-range mechanical carrier of acoustic
  information.
</p>

<p class="aside-detail">
  What your eardrum catches between $20$ Hz and $20$ kHz is a
  narrow band of pressure-wave behaviour shared with much of the
  animal kingdom. Most of the pressure-wave conversation in your
  immediate environment falls outside that window &mdash; in the
  infrasound of weather and machinery, or the ultrasound of bats
  and rodents. $\\sigma_i$ tunes to a sliver.
</p>
`,
    },
  },

  "em-radiation": {
    id: "em-radiation",
    detail: {
      title: "Electromagnetic radiation",
      html: `
<p class="lead">
  Electromagnetic radiation is what light <em>is</em> &mdash; but at
  a deeper level than that. It is not just &ldquo;what we see&rdquo;
  or &ldquo;the visible band we react to.&rdquo; It is one of the
  fundamental constituents of $w$ itself. Worth several angles.
</p>

<h3>As a constituent of $w$</h3>
<p>
  Electromagnetic radiation is one of the fundamental things the
  world contains. Alongside matter, gravitation, and the other force
  fields, it is part of the basic inventory of $w$. It is not a
  property of objects so much as it is its own kind of entity: a
  field with excitations (photons) that exists in its own right.
</p>

<h3>As a field on spacetime</h3>
<p>
  More precisely, the electromagnetic field is a structure defined
  at every point of spacetime in $w$. At each point there is an
  electric-field vector and a magnetic-field vector (or, more
  elegantly, a single tensor combining them). <em>Electromagnetic
  radiation</em> is what you get when this field has self-sustaining
  wavelike excitations propagating through it.
</p>

<h3>As a carrier of information about $w$</h3>
<p>
  Epistemically, electromagnetic radiation is the principal medium
  by which parts of $w$ reveal themselves to other parts. Almost
  everything observers know about distant regions of the world
  arrives as photons. Light from stars, X-rays from black holes,
  microwaves from the cosmic background &mdash; all are
  electromagnetic radiation carrying information across vast spans
  of $w$.
</p>
<p>
  So it has a dual status: it is a thing in the world, and the main
  channel through which the world becomes knowable.
</p>

<h3>As a relation between charges</h3>
<p>
  Causally, electromagnetic radiation is how electrically charged
  parts of $w$ influence one another across distance. Accelerate a
  charge here, and a charge over there is disturbed later. The
  radiation is the intervening reality that makes this
  non-instantaneous influence possible &mdash; the medium of
  causation between separated charges.
</p>

<h3>As lawful behaviour</h3>
<p>
  Modally, the existence and behaviour of electromagnetic radiation
  in $w$ is governed by <em>Maxwell&rsquo;s equations</em>
  (classically) or <em>quantum electrodynamics</em> (more
  fundamentally). These laws are themselves features of $w$
  &mdash; not imposed on it, but part of its structure.
</p>

<h3>A compact definition</h3>

<p class="callout">
  In $w$, electromagnetic radiation is a propagating excitation of
  the electromagnetic field &mdash; itself a fundamental constituent
  of $w$ &mdash; that mediates interactions among charged entities
  and serves as the dominant medium through which spatially
  separated parts of $w$ causally and informationally connect.
</p>

<p class="aside-detail">
  What your retina catches between $400$ and $700$ nm is a narrow
  band of this much larger structure. The light you see is the
  small slice of the electromagnetic field that happens to fall
  within $\\sigma_i$&rsquo;s sensitivity. Most of the EM field&rsquo;s
  conversation with the world bypasses you entirely.
</p>
`,
    },
  },

  "pinning-down-na": {
    id: "pinning-down-na",
    detail: {
      title: "Pinning down Avogadro&rsquo;s number",
      html: `
<p class="lead">
  The historical detective story of how Avogadro&rsquo;s
  <em>qualitative</em> hypothesis &mdash; <em>&ldquo;equal volumes
  hold equal counts&rdquo;</em> &mdash; got turned into the
  <em>quantitative</em> number $6 \\times 10^{23}$. Avogadro himself
  never knew the number; he just knew it had to exist. It took about
  a century after his proposal for anyone to nail it down.
</p>

<p>Here is the logic chain that gets you from the hypothesis to the number.</p>

<h3>Step 1: The hypothesis gives you ratios, not absolutes</h3>
<p>
  Avogadro&rsquo;s principle tells you that if $22.4$ litres of
  hydrogen and $22.4$ litres of oxygen are at the same temperature
  and pressure, they contain the same number of molecules. But it
  does not say how many. The number could be a thousand, a billion,
  or a trillion trillion &mdash; the hypothesis is silent.
</p>

<h3>Step 2: Combine with mass measurements to get relative molecular masses</h3>
<p>
  Once you accept the hypothesis, you can compare gas densities to
  learn how heavy molecules are relative to each other. Example: at
  the same temperature and pressure, $1$ litre of oxygen weighs
  $16$ times more than $1$ litre of hydrogen. Since both litres
  contain the same number of molecules, each oxygen molecule must
  weigh $16$ times more than each hydrogen molecule. You now know
  the ratio of molecular masses, even though you still do not know
  any absolute mass.
</p>
<p>
  By the mid-1800s, chemists had built up a complete table of
  relative atomic masses this way &mdash; hydrogen $=1$, carbon
  $=12$, oxygen $=16$, and so on &mdash; without knowing the actual
  mass of a single atom in grams.
</p>

<h3>Step 3: Define the mole as a self-referential bridge</h3>
<p>
  Chemists made a clever definitional move: take a quantity of any
  substance whose mass <em>in grams</em> equals its molecular mass
  <em>in atomic-mass-units</em>, and call that &ldquo;one
  mole.&rdquo; So $2$ grams of $\\text{H}_2$, $32$ grams of
  $\\text{O}_2$, $18$ grams of $\\text{H}_2\\text{O}$, $12$ grams
  of carbon &mdash; all are one mole.
</p>
<p>
  By construction, one mole of any substance contains the same
  number of molecules as one mole of any other substance. That
  number is Avogadro&rsquo;s constant, $N_A$. But notice: the
  definition does not <em>tell</em> you the number. It just
  guarantees that whatever the number is, it is the same across
  substances. You have moved the unknown from &ldquo;molecule
  count in a litre&rdquo; to &ldquo;molecules per mole&rdquo;
  &mdash; still unknown, but now a single universal constant
  rather than a per-gas quantity.
</p>

<h3>Step 4: Find a way to actually count</h3>
<p>
  This is where you need an experiment that probes individual
  molecules. Several routes exist; here are the three historically
  most important.
</p>

<p>
  <em>Brownian motion (Einstein 1905, Perrin 1908).</em> Einstein
  derived a formula showing that if you suspend tiny particles
  (like pollen grains) in a fluid, they get kicked around by water
  molecules in a specific statistical pattern. The mean-squared
  distance a particle wanders in time $t$ depends on temperature,
  fluid viscosity, particle radius, and &mdash; crucially &mdash;
  on $N_A$:
</p>

$$\\langle x^2 \\rangle \\;=\\; \\frac{R \\, T \\, t}{3 \\pi \\eta r N_A}$$

<p>
  Every variable on the right except $N_A$ is measurable: $R$ is
  the gas constant (from gas-pressure experiments), $T$ is
  temperature, $\\eta$ is viscosity (measurable in a viscometer),
  $r$ is the particle radius (measurable in a microscope), and
  $\\langle x^2 \\rangle$ is the average jiggle distance
  (measurable by watching pollen under a microscope and timing it).
  Plug everything in, solve for $N_A$. Perrin spent years doing
  exactly this experiment and got $N_A \\approx 6 \\times 10^{23}$
  in 1908. He won the Nobel Prize for it in 1926.
</p>

<p>
  <em>Electrolysis (Faraday-style).</em> Pass a known electric
  current through a solution and weigh how much metal deposits on
  an electrode. You know two things independently: the total
  electric charge that flowed (from current $\\times$ time), and
  the mass of metal deposited. Each metal atom carries a specific
  number of electrons during the reaction, and each electron
  carries charge $e$. So:
</p>

$$\\text{total charge} \\;=\\; (\\text{atoms deposited}) \\times (\\text{electrons per atom}) \\times e$$

<p>
  If you also know $e$ (Millikan measured it in 1909 with his
  famous oil-drop experiment), and you know the mass per mole of
  the metal, you can solve for atoms per mole. This gives $N_A$
  again, around $6 \\times 10^{23}$.
</p>

<p>
  <em>X-ray crystallography (the modern gold standard).</em> Take
  a perfect crystal of silicon. X-ray diffraction tells you the
  exact lattice spacing &mdash; how far apart the atoms sit
  &mdash; to extreme precision. From the geometry of a silicon
  crystal you can compute the volume occupied by one atom.
  Measure the macroscopic density of the crystal (mass per unit
  volume) and the molar mass of silicon, and you can compute how
  many atoms are in a mole:
</p>

$$N_A \\;=\\; \\frac{\\text{molar mass}}{\\text{density} \\times \\text{volume per atom}}$$

<p>
  Modern versions of this experiment using ultra-pure
  isotopically-enriched silicon-28 spheres pin down $N_A$ to about
  nine decimal places.
</p>

<h3>Step 5: Confidence comes from agreement</h3>
<p>
  No single experiment <em>proves</em> $N_A$ &mdash; what is
  convincing is that wildly different methods all converge on the
  same number. Brownian motion (watching pollen jiggle),
  electrolysis (weighing electroplated metal), X-ray
  crystallography (measuring crystal lattices), blackbody
  radiation (fitting the curve of glowing hot objects), Boltzmann
  constant measurements (acoustic resonance in argon spheres)
  &mdash; all give $N_A \\approx 6.022 \\times 10^{23}$.
</p>

<p class="callout">
  There is no reason these techniques should agree unless atoms
  are real and the molecular picture of matter is correct.
</p>

<h3>Step 6: The 2019 redefinition</h3>
<p>
  Up until 2019, $N_A$ was a <em>measured</em> number &mdash; the
  best experimental value, with uncertainty in the last digit. In
  2019, the international metrology committee inverted this: they
  <em>defined</em> Avogadro&rsquo;s number to be exactly
  $6.02214076 \\times 10^{23}$ and then redefined the mole as
  &ldquo;exactly that many entities.&rdquo;
</p>
<p>
  So now $N_A$ is exact by fiat, the way the speed of light is
  exact by fiat, and the kilogram is now defined in terms of $N_A$
  (along with Planck&rsquo;s constant) rather than the other way
  around. The chosen value was the best measured value, rounded
  to enough digits that no practical chemistry would notice the
  change.
</p>

<h3>The big picture</h3>
<p>
  Avogadro&rsquo;s hypothesis itself does not give you the number
  $6 \\times 10^{23}$ &mdash; it just tells you that <em>some</em>
  such universal constant must exist. The number comes from
  independent experiments that probe individual molecules:
  watching them push pollen, counting them via electric charge,
  measuring their spacing in crystals.
</p>

<p class="callout">
  Avogadro&rsquo;s hypothesis is the conceptual scaffolding that
  says &ldquo;look for one number.&rdquo; Experiment is what fills
  in which number it is.
</p>

<p class="aside-detail">
  There is something philosophically lovely here. Avogadro
  proposed in 1811 that such a constant must exist, and did not
  live to see it measured. Perrin measured it almost a century
  later, and proved atoms were real in the process. In 2019,
  humanity decided we trusted the number enough to make it a
  definition. Three steps spread over two centuries:
  <em>posit it exists &rarr; measure it &rarr; crown it as a
  constant of nature.</em>
</p>
`,
    },
  },

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
<p>
  Avogadro himself never knew the actual number &mdash; only that it
  had to exist. Pinning down the specific value $\\sim 6 \\times 10^{23}$
  took <a class="eq-ref" data-eq="pinning-down-na">about a century of
  detective work</a>.
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
  data-tt-say="k-B times N-A is approximately one, in order of magnitude"
  data-tt-sym="$k_B \\sim 10^{-23}$ J/K is the per-molecule thermal-energy scale; $N_A \\approx 6 \\times 10^{23}$ is Avogadro&rsquo;s number, the count of molecules in one mole."
  data-tt-ctx="$N_A$ comes from chemistry. Amedeo Avogadro proposed in 1811 that equal volumes of gas at the same temperature and pressure contain equal numbers of molecules &mdash; meaning there is a definite count of molecules in any given chunk of stuff. The specific value $\\sim 6 \\times 10^{23}$ is whatever count makes atomic masses come out as convenient gram quantities: one mole of carbon weighs $12$ g, one mole of water weighs $18$ g. Multiplying $k_B$ by $N_A$ scales the per-molecule quantity up to per-mole &mdash; the unit chemistry actually works in. The cancellation of $10^{-23}$ against $10^{23}$ is why these constants are mirror images."
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
