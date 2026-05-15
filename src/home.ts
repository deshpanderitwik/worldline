export const homeHTML = `
  <h1 class="glyph">w</h1>
  <p class="subtitle">an ontology &mdash; v0.31</p>

  <section>
    <h2>I &middot; The symbol</h2>

    <div class="def">
      <span class="def-label">Definition 0</span>
      Let <span class="var">w</span> denote the world: everything that is the
      case. The totality. The sum.
    </div>

    <div class="prop">
      <div class="prop-num">0.1</div>
      <p class="prop-body">
        <span class="var">w</span> contains all that exists, has existed, or will
        exist; every relation between any of these; every event, every fact,
        every possibility realized. It contains the act of containing.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">0.2</div>
      <p class="prop-body">
        <span class="var">w</span> contains this document. The map is inside the
        territory.
      </p>
    </div>
  </section>

  <section>
    <h2>II &middot; What kind of symbol</h2>

    <div class="prop">
      <div class="prop-num">1.0</div>
      <p class="prop-body">
        A variable, in the ordinary sense, ranges over a domain
        $x \\in D$.
        <span class="var">w</span> is not such a variable. There is no domain
        outside <span class="var">w</span> from which it draws its value.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">1.1</div>
      <p class="prop-body">
        <span class="var">w</span> is closer to a constant: a single, fixed
        referent. But unlike ordinary constants, its content is unbounded and
        recursive &mdash; it includes the symbol that names it.
      </p>
      $$w \\in w$$
    </div>

    <div class="prop">
      <div class="prop-num">1.2</div>
      <p class="prop-body">
        <span class="var">w</span> is also the domain itself. Every other
        variable we will introduce ranges over some subset of
        <span class="var">w</span>.
      </p>
      $$\\forall x,\\ x \\in w$$
    </div>

    <p class="aside">
      So <span class="var">w</span> is at once a constant (it has one referent),
      a domain (everything else lives inside it), and a name (a finite mark
      pointing at the unbounded). Loading these three roles into one symbol is
      the first move.
    </p>
  </section>

  <section>
    <h2>III &middot; The map is not the territory</h2>

    <div class="prop">
      <div class="prop-num">2.0</div>
      <p class="prop-body">
        The symbol <span class="var">w</span> is not <span class="var">w</span>.
        A finite mark cannot enclose the unbounded.
      </p>
      $$\\ulcorner w \\urcorner \\neq w$$
    </div>

    <div class="prop">
      <div class="prop-num">2.1</div>
      <p class="prop-body">
        We use <span class="var">w</span> not to capture the world but to
        <em>point</em> at it &mdash; and, by pointing, to make it possible to
        reason. The symbol is a handle.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">2.2</div>
      <p class="prop-body">
        Every successor symbol &mdash; every refinement we add &mdash; is a way
        of carving <span class="var">w</span> into pieces small enough to think
        about. The carving is ours; the carved is not.
      </p>
    </div>
  </section>

  <section>
    <h2>IV &middot; The questioner</h2>

    <div class="def">
      <span class="def-label">Definition 1</span>
      Let <span class="var">i</span> denote the one asking. The questioner. The
      reader. You.
    </div>

    <div class="prop">
      <div class="prop-num">3.0</div>
      <p class="prop-body">
        <span class="var">i</span> is in <span class="var">w</span>. The
        questioner is not standing outside the world looking in; there is no
        outside.
      </p>
      $$i \\in w$$
    </div>

    <div class="prop">
      <div class="prop-num">3.1</div>
      <p class="prop-body">
        <span class="var">i</span> is a <em>proper</em> part of
        <span class="var">w</span>. Finite. Local. Bounded in space, in time, in
        attention. Most of <span class="var">w</span> is not
        <span class="var">i</span>.
      </p>
      $$i \\subsetneq w$$
    </div>

    <div class="prop">
      <div class="prop-num">3.2</div>
      <p class="prop-body">
        <span class="var">i</span> is not a point but a <em>worldline</em>: a
        trajectory through <span class="var">w</span> indexed by time. The
        <span class="var">i</span> who began this sentence is not exactly the
        <span class="var">i</span> who finishes it.
      </p>
      $$i : T \\to w, \\quad t \\mapsto i(t)$$
    </div>

    <div class="prop">
      <div class="prop-num">3.3</div>
      <p class="prop-body">
        <span class="var">w</span> appears <em>to</em> <span class="var">i</span>.
        This is the asymmetry of the first person: the world is given,
        not chosen, and given from somewhere &mdash; here. Every coordinate in
        <span class="var">w</span> is reckoned from this somewhere.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">3.4</div>
      <p class="prop-body">
        <span class="var">i</span> is asking about <span class="var">w</span>
        from <em>inside</em> <span class="var">w</span>. The act of asking is
        itself a feature of <span class="var">w</span>. There is no neutral
        vantage; the questioner is part of the question.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">3.5</div>
      <p class="prop-body">
        Any model <span class="var">M</span> that <span class="var">i</span>
        builds of <span class="var">w</span> must contain
        <span class="var">i</span>, since <span class="var">i</span> is in
        <span class="var">w</span>. Hence <span class="var">M</span> must
        contain a model of the modeller. The map includes the mapmaker drawing
        the map.
      </p>
      $$i \\in w \\;\\Rightarrow\\; i \\in M \\;\\Rightarrow\\; M_i \\in M \\;\\Rightarrow\\; \\ldots$$
    </div>

    <div class="prop">
      <div class="prop-num">3.6</div>
      <p class="prop-body">
        <span class="var">i</span> cannot finish the model of
        <span class="var">i</span>. Each attempt produces a new
        <span class="var">i</span> &mdash; the one doing the modelling &mdash;
        which is not yet in the model. The self is the residue of every
        self-description.
      </p>
    </div>

    <p class="aside">
      Note the borrowed symbol. In algebra, <span class="var">i</span> is the
      imaginary unit: $i^2 = -1$. It was named &ldquo;imaginary&rdquo;
      because it could not be located on the real number line &mdash; yet
      without it, the algebra of the real does not close. So too the
      questioner: not findable as one object among others in
      <span class="var">w</span>, yet <span class="var">w</span> cannot be
      coherently described without it.
    </p>
  </section>

  <section>
    <h2>V &middot; Time</h2>

    <div class="def">
      <span class="def-label">Definition 2</span>
      Let <span class="var">T</span> denote time: the dimension along which
      <span class="var">i</span>, and every other part of <span class="var">w</span>,
      is extended.
    </div>

    <div class="prop">
      <div class="prop-num">4.0</div>
      <p class="prop-body">
        <span class="var">T</span> is the parameter of the worldline introduced
        in 3.2. To exist, for any part of <span class="var">w</span>, is to be
        extended in <span class="var">T</span> &mdash; to have a duration, however brief.
      </p>
      $$T \\cong \\mathbb{R}, \\quad i : T \\to w$$
    </div>

    <div class="prop">
      <div class="prop-num">4.1</div>
      <p class="prop-body">
        Considered abstractly, <span class="var">T</span> is symmetric: each
        <span class="var">t</span> is just a coordinate, no different in kind
        from any other. There is no <em>now</em> intrinsic to
        <span class="var">w</span>. The block of times is, all at once, the case.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">4.2</div>
      <p class="prop-body">
        Yet <span class="var">w</span> has an arrow. Entropy
        <span class="var">S</span> increases along <span class="var">T</span>;
        the forward direction is the direction of disorder. The asymmetry of
        past and future is not a property of the coordinate but of the dynamics
        unfolding through it.
      </p>
      $$\\frac{dS}{dt} \\;\\geq\\; 0$$
    </div>

    <div class="prop">
      <div class="prop-num">4.3</div>
      <p class="prop-body">
        <span class="var">i</span> has a <em>now</em>:
        <span class="var">t<sub>0</sub></span>. This is not a feature of
        <span class="var">T</span> but of <span class="var">i</span>'s position
        on its worldline. <span class="var">T</span> has no preferred point;
        <span class="var">i</span> is always at one.
      </p>
      <a class="eq-link" data-eq="now">$$t_0 \\in T, \\quad t_0 = t_0(i)$$</a>
    </div>

    <div class="prop">
      <div class="prop-num">4.4</div>
      <p class="prop-body">
        <span class="var">i</span> can <em>remember</em> &mdash; access prior
        states of itself, encoded in present matter &mdash; and
        <em>anticipate</em> &mdash; model future states. But
        <span class="var">i</span> can only <em>act</em> at
        <span class="var">t<sub>0</sub></span>. The past is closed; the future
        is unreachable except as it becomes the present.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">4.5</div>
      <p class="prop-body">
        <span class="var">t<sub>0</sub></span> is not a point but a thin
        interval. The lived present has thickness &mdash; a few moments of
        retention behind, a few moments of protention ahead, meeting in the
        body. The now is where the worldline is currently passing
        <em>through</em> <span class="var">w</span>, and passing has duration.
      </p>
      <a class="eq-link" data-eq="thick-now">$$\\text{now}_i \\;=\\; [\\,t_0 - \\delta,\\; t_0 + \\delta\\,]$$</a>
    </div>

    <div class="prop">
      <div class="prop-num">4.6</div>
      <p class="prop-body">
        Two readings of <span class="var">T</span> coexist. The
        <em>B-series</em> &mdash; earlier-than, later-than &mdash; is intrinsic
        to <span class="var">w</span> and indifferent to any observer. The
        <em>A-series</em> &mdash; past, present, future &mdash; is meaningful
        only from a worldline. The first is geometry; the second is biography.
      </p>
      <a class="eq-link" data-eq="series">$$\\underbrace{t_1 < t_2}_{\\text{B-series, intrinsic}} \\quad\\vert\\quad \\underbrace{\\text{past} \\,\\prec\\, t_0 \\,\\prec\\, \\text{future}}_{\\text{A-series, } i\\text{-relative}}$$</a>
    </div>

    <div class="prop">
      <div class="prop-num">4.7</div>
      <p class="prop-body">
        Therefore: every act of <span class="var">i</span> lands at
        <span class="var">t<sub>0</sub></span>. The past cannot be revised; the
        future cannot be inhabited; the present is the only surface on which
        <span class="var">i</span> is in contact with <span class="var">w</span>.
        All leverage is here.
      </p>
    </div>

    <p class="aside">
      The body is what holds <span class="var">i</span> in
      <span class="var">T</span>. Heartbeat, breath, hunger, fatigue &mdash;
      these are <span class="var">i</span>'s local clocks, the rhythms by which
      the abstract parameter <span class="var">t</span> becomes a lived now.
      Lose the body and <span class="var">i</span> loses its grip on time;
      tend the body and <span class="var">t<sub>0</sub></span> sharpens.
    </p>
  </section>

  <section>
    <h2>VI &middot; Change</h2>

    <div class="prop">
      <div class="prop-num">5.0</div>
      <p class="prop-body">
        Section V left a debt. We claimed in 4.2 that <span class="var">w</span>
        has an arrow &mdash; that <span class="var">T</span>'s asymmetry is
        not in the coordinate but in the dynamics unfolding through it.
        That is a promissory note. To redeem it, we have to look at
        change itself.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">5.1</div>
      <p class="prop-body">
        <span class="var">T</span> is the dimension along which
        <em>change</em> happens. Without change, no <span class="var">t</span>
        could be distinguished from any other; you could not tell time was
        passing. So <span class="var">T</span>'s arrow is really a question
        about change itself: are all changes equally easy in both directions,
        or are some changes one-way?
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">5.2</div>
      <p class="prop-body">
        The fundamental laws of physics are time-symmetric. Newton's
        equations, Maxwell's, Schr&ouml;dinger's all run equally well
        forwards and backwards. A pendulum swinging looks plausible in
        either direction of film. Yet we never see eggs unbreak, smoke
        ungather, a stirred cup of coffee separate back into milk and dark.
        The arrow lives not in the equations of motion but in the
        <em>statistics</em> of how matter and energy are arranged.
      </p>
    </div>

    <p class="aside">
      The asymmetry will be told by a quantity we have not yet introduced.
      To find it, we first need the machinery of change: what it costs, how
      it moves, how its motion is measured.
    </p>

    <div class="def">
      <span class="def-label">Definition 4</span>
      Let <span class="var">E</span> denote energy: the conserved currency
      of change. Anything that happens in <span class="var">w</span> converts
      <span class="var">E</span> from one form to another, but cannot create
      or destroy it.
    </div>

    <div class="prop">
      <div class="prop-num">5.3</div>
      <p class="prop-body">
        The total energy of <span class="var">w</span> does not change. This
        is the First Law of thermodynamics &mdash; the deepest empirical
        regularity we have, with no known exception.
      </p>
      $$dE_{w} \\;=\\; 0$$
    </div>

    <div class="prop">
      <div class="prop-num">5.4</div>
      <p class="prop-body">
        <span class="var">E</span> takes many forms: kinetic (motion),
        potential (stored position), chemical (bonds), thermal (jiggling),
        radiant (light), and others. Change is the conversion of one form
        into another. The forms are interchangeable, but the <em>ease</em>
        of conversion is not equal in both directions &mdash; and this is
        where the arrow of <span class="var">T</span> will appear.
      </p>
    </div>

    <div class="def">
      <span class="def-label">Definition 5</span>
      Let <span class="var">Q</span> denote heat: energy in transit between
      two bodies that differ in temperature.
    </div>

    <div class="def">
      <span class="def-label">Definition 6</span>
      Let <span class="var">&Theta;</span> denote temperature: a measure
      of how energetically the constituents of a body are jiggling.
    </div>

    <p class="aside">
      A note on notation. Physics conventionally writes both time and
      temperature as <span class="var">T</span>. Here, where time is already
      <span class="var">T</span>, we will use <span class="var">&Theta;</span>
      &mdash; capital theta &mdash; for temperature, to keep the two
      distinct.
    </p>

    <div class="prop">
      <div class="prop-num">5.5</div>
      <p class="prop-body">
        High <span class="var">&Theta;</span> means the constituents of a
        body are moving violently; low <span class="var">&Theta;</span> means
        they are nearly still. <span class="var">&Theta;</span> is not energy
        itself but a measure of the <em>average</em> energy per particle.
        Two cups of coffee at the same <span class="var">&Theta;</span> have
        the same average jiggle, but a swimming pool at that
        <span class="var">&Theta;</span> contains vastly more total energy.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">5.6</div>
      <p class="prop-body">
        Heat flows spontaneously from high <span class="var">&Theta;</span>
        to low <span class="var">&Theta;</span>. The reverse never happens
        on its own. A hot stone placed in cold water transfers heat to the
        water; we never observe a tepid stone in tepid water suddenly
        heating itself by chilling the water. This is the most everyday
        face of the arrow of <span class="var">T</span>, and the first
        irreversibility we can name precisely.
      </p>
    </div>

    <p class="aside">
      The body version. You are an energy economy. Every cell extracts
      <span class="var">E</span> from chemical bonds in food, converts it
      into mechanical work and heat, and exports the heat at body
      <span class="var">&Theta;</span> ($\\approx$ 310 K). Your existence
      is an unbroken chain of conversions &mdash; food to motion, motion to
      heat, heat to environment &mdash; held in a remarkably narrow band of
      <span class="var">&Theta;</span>. Lose
      <span class="var">&Theta;</span>-regulation and the conversions cease.
    </p>

    <div class="prop">
      <div class="prop-num">5.7</div>
      <p class="prop-body">
        With <span class="var">E</span>, <span class="var">Q</span>, and
        <span class="var">&Theta;</span> in hand, we have the machinery of
        change. What is still missing is the quantity that measures its
        asymmetry &mdash; and the form it takes is unexpected. The
        asymmetry turns out to be a property not of any single arrangement
        but of <em>how many arrangements would look the same as this
        one</em>. The more such arrangements, the more places change can
        wander unnoticed; the fewer, the more specific the configuration.
        Reversing change means landing back on a particular arrangement
        among many. That count, named in the next section, is entropy.
      </p>
    </div>
  </section>

  <section>
    <h2>VII &middot; Entropy</h2>

    <div class="def">
      <span class="def-label">Definition 7</span>
      Let <span class="var">S</span> denote entropy: a count of how many
      distinct underlying configurations would all appear the same to
      us. The asymmetric residue 5.7 promised. The grain of
      <span class="var">T</span>.
    </div>

    <div class="prop">
      <div class="prop-num">6.0</div>
      <p class="prop-body">
        Doing that count requires a distinction. Two arrangements
        &ldquo;look the same&rdquo; when they share a coarse-grained
        label &mdash; what we will call their <em>macrostate</em>. The
        complete specification of an arrangement, with every component
        pinned down and nothing left unsaid, is its <em>microstate</em>.
        The macrostate is blind to the differences below its resolution;
        many microstates fit under one. Entropy is the count of
        microstates per macrostate.
      </p>
      <p class="prop-body">
        Start with cards. A fresh deck has exactly one microstate that
        counts as &ldquo;in factory order.&rdquo; Shuffle it, and roughly
        $52! \\approx 8 \\times 10^{67}$ microstates all count as
        &ldquo;shuffled.&rdquo; Shuffling does not add or remove anything
        &mdash; it trades a single, specific microstate for an astronomical
        equivalence class of shuffled-looking ones.
      </p>
      <p class="prop-body">
        The same with a drop of dye in still water. Few arrangements
        count as &ldquo;drop in middle&rdquo;; vastly more count as
        &ldquo;evenly mixed.&rdquo; The drift from one to the other is
        not a force. It is statistics. More arrangements fit the
        disordered description, so a system free to move ends up among
        them.
      </p>
      <p class="prop-body">
        Entropy is the count of those arrangements. The more ways things
        could be, given how they look, the higher
        <span class="var">S</span> &mdash; and the more impossible it
        becomes to find your way back to any one specific one.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">6.1</div>
      <p class="prop-body">
        Boltzmann (1877) gave the count its formula. Let
        <span class="var">W</span> be the number of microscopic
        arrangements consistent with what we can see of the system.
        (Note the case: <span class="var">W</span> is the microstate
        count, distinct from the world <span class="var">w</span> we
        named in Section I &mdash; two different symbols.) Then:
      </p>
      <a class="eq-link" data-eq="boltzmann">$$S \\;=\\; k_B \\ln W$$</a>
      <p class="prop-body">
        The logarithm tames the absurd numbers &mdash;
        <a class="eq-ref" data-eq="sugar-cube">a sugar cube has
        $W \\approx 10^{10^{23}}$</a> &mdash; and the constant $k_B$
        scales the dimensionless count into joules per kelvin so it
        plugs into the rest of physics. Boltzmann engraved this on his
        tomb. It is the most fundamental form: <span class="var">S</span>
        is, at bottom, just <em>log of how many ways</em>.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">6.2</div>
      <p class="prop-body">
        Clausius (1865) reached the same quantity from the outside,
        before molecules were established and microstates could be
        counted. He worked from heat flow alone:
      </p>
      <a class="eq-link" data-eq="clausius">$$dS \\;=\\; \\frac{dQ_{\\text{rev}}}{\\Theta}$$</a>
      <p class="prop-body">
        Adding heat $dQ$ at temperature
        <span class="var">&Theta;</span> raises entropy by exactly that
        amount, in the reversible limit. Why divide by
        <span class="var">&Theta;</span>? Cold systems have particles
        that are nearly still; few existing arrangements, and each new
        joule of heat opens up many more. Hot systems are already wild;
        the same joule barely changes the count. The $1/\\Theta$ factor
        is the macroscopic shadow of multiplicity. Same
        <span class="var">S</span>, measured from the outside.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">6.3</div>
      <p class="prop-body">
        Shannon (1948) generalized. Studying telegraph signals, he asked
        how much information a message carries, and arrived at:
      </p>
      $$H \\;=\\; -\\sum_i p_i \\log p_i$$
      <p class="prop-body">
        For any system with possible states $i$ and probabilities $p_i$,
        this counts how much you do not know about which state is
        actually true. When every state is equally likely, Shannon's
        formula reduces exactly to Boltzmann's. So
        <span class="var">S</span> is, at the deepest level, <em>missing
        information</em>. Low-<span class="var">S</span> states are ones
        you know a lot about (a fresh deck &mdash; you know the order).
        High-<span class="var">S</span> states are ones you know little
        about (a shuffled deck &mdash; you only know it's shuffled).
        Thermodynamics and information theory are the same equation in
        different clothes.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">6.4</div>
      <p class="prop-body">
        <span class="var">w</span> runs on two great bookkeeping
        quantities. Energy is conserved; entropy is created. The first
        is symmetric in time, the second is not. Together they almost
        suffice to describe what is possible.
      </p>
      $$dE_{w} \\;=\\; 0 \\qquad dS_{w} \\;\\geq\\; 0$$
    </div>

    <div class="prop">
      <div class="prop-num">6.5</div>
      <p class="prop-body">
        The Second Law &mdash; that <span class="var">S</span> never
        decreases in a closed system &mdash; is not a law in the same
        strict sense as conservation of energy. It is a statistical
        near-certainty. There are so many more high-<span class="var">S</span>
        arrangements than low-<span class="var">S</span> ones that any
        system free to wander will end up among them. Strictly speaking,
        a hot stone in cold water could spontaneously chill the water
        and heat itself. The probability is just so close to zero that
        we would need many universe-lifetimes to see it. The arrow of
        <span class="var">T</span> is dynamical, not coordinate, because
        the dice are loaded.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">6.6</div>
      <p class="prop-body">
        <span class="var">i</span>, embodied, is a local
        <span class="var">S</span>-decrease &mdash; a pocket of order
        maintained by exporting more disorder than it accumulates. Eat
        low-<span class="var">S</span> food (organized molecules);
        exhale high-<span class="var">S</span> heat and CO<sub>2</sub>.
        The body is an entropy pump:
      </p>
      $$\\frac{dS_{i}}{dt} \\;<\\; 0 \\quad \\text{only if} \\quad \\frac{dS_{\\text{env}}}{dt} \\;>\\; \\left|\\frac{dS_{i}}{dt}\\right|$$
      <p class="prop-body">
        Living, in physical terms, is staying ahead of drift. Aging is
        what happens when the pump's efficiency drops; death is when it
        stops.
      </p>
    </div>

    <p class="aside">
      A note on the symbol. <span class="var">E</span> was already taken
      &mdash; by energy &mdash; when Clausius needed a letter for his
      new quantity in 1865. He chose <span class="var">S</span> in
      tribute to Sadi Carnot, the French engineer whose 1824 work on
      heat engines made the whole framework possible, and who died
      young in 1832. So <span class="var">S</span> is at once a free
      letter and a quiet memorial: the conserved <span class="var">E</span>
      and the created <span class="var">S</span>, named for what was
      given and what was lost.
    </p>
  </section>

  <section>
    <h2>VIII &middot; Boundary</h2>

    <div class="def">
      <span class="def-label">Definition 8</span>
      Let <span class="var">&part;i</span> denote the boundary of
      <span class="var">i</span>: the surface across which
      <span class="var">i</span> exchanges matter, energy, and
      information with the rest of <span class="var">w</span>.
    </div>

    <div class="prop">
      <div class="prop-num">7.0</div>
      <p class="prop-body">
        <em>Where does <span class="var">i</span> end?</em> The naive
        answer is &ldquo;at the skin.&rdquo; Right in spirit, wrong
        in detail.
      </p>
      $$\\partial i \\;\\subset\\; w$$
    </div>

    <div class="prop">
      <div class="prop-num">7.1</div>
      <p class="prop-body">
        <em>Skin is too narrow.</em> The microbiome &mdash; some
        $10^{13}$ bacterial cells living on and in you, half not-you
        genetically &mdash; is part of your operation. The air you
        are breathing right now is across the boundary going in.
        Tools extend <span class="var">i</span>: trained pianists
        feel the boundary at the keys, drivers at the chassis.
        <span class="var">&part;i</span> is not contained by skin.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">7.2</div>
      <p class="prop-body">
        <em>Skin is too broad.</em> Dead skin cells on the surface;
        food still moving through the gut; foreign DNA from viral
        ancestors integrated into your genome. Plenty inside skin is
        functionally not-<span class="var">i</span>.
        <span class="var">&part;i</span> is not coextensive with skin
        either.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">7.3</div>
      <p class="prop-body">
        <em>The functional definition.</em>
        <span class="var">&part;i</span> marks where
        <strong>direct two-way coupling</strong> ends. Inside: you
        can change it by intention, and it changes you by physics.
        Outside: you can only act on it indirectly, through what is
        inside. <em>I move my hand directly</em> &mdash; my hand is
        inside <span class="var">&part;i</span>. <em>I cannot move
        the table directly</em> &mdash; the table is outside, in
        <span class="var">w</span>, reachable but not part of
        <span class="var">i</span>.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">7.4</div>
      <p class="prop-body">
        <em><span class="var">&part;i</span> is permeable.</em>
        Three currents flow constantly across it:
        <strong>matter</strong> (air, food, water in; waste out),
        <strong>energy</strong> (light, sound, heat in; work and
        heat out), and <strong>information</strong> (signals in;
        speech, gesture, action out). Closed boundaries do not exist
        for <span class="var">i</span>. To live is to exchange.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">7.5</div>
      <p class="prop-body">
        <em><span class="var">&part;i</span> is contextual.</em> The
        boundary deforms with what <span class="var">i</span> is
        currently coupled to. When you drive, the car is part of
        <span class="var">&part;i</span>; when you write, the pen
        is; when you reason with notation, the paper is. Tools
        extend <span class="var">&part;i</span> operationally. Lose
        engagement with the tool and <span class="var">&part;i</span>
        snaps back.
      </p>
      $$\\partial i \\;=\\; \\partial i(t, \\, \\text{context})$$
    </div>

    <div class="prop">
      <div class="prop-num">7.6</div>
      <p class="prop-body">
        <em>There is no exact <span class="var">&part;i</span>.</em>
        The boundary is fuzzy, has different layers (cellular,
        sensory, attentional, conceptual), and shifts
        moment-to-moment. The useful question is <em>for this
        purpose, where is the relevant boundary?</em> &mdash; and to
        know that the answer is always contextual.
      </p>
    </div>

    <p class="aside">
      The body is what makes <span class="var">i</span> locatable in
      <span class="var">w</span>. Without it,
      <span class="var">&part;i</span> loses its anchor; with it,
      <span class="var">&part;i</span> has a stable spatial
      reference and a stable temporal continuity. Tend the body and
      <span class="var">&part;i</span> sharpens &mdash; you feel its
      edges more clearly, your tools click into place. Lose
      attention to the body and <span class="var">&part;i</span>
      blurs &mdash; you feel diffuse, harder to find. The body is
      the floor of every other extension.
    </p>
  </section>

  <section>
    <h2>IX &middot; Sensation</h2>

    <div class="def">
      <span class="def-label">Definition 9</span>
      Let <span class="var">&sigma;<sub>i</sub></span> denote the
      sensorium of <span class="var">i</span>: the channels by which
      <span class="var">w</span> reaches <span class="var">i</span>
      across <span class="var">&part;i</span>.
    </div>

    <div class="prop">
      <div class="prop-num">8.0</div>
      <p class="prop-body">
        <em>How does <span class="var">w</span> get into
        <span class="var">i</span>?</em> Not by direct contact.
        Through specific channels: light hits the retina, pressure
        deforms the cochlea, chemicals bind to receptors. The
        sensorium is <span class="var">i</span>&rsquo;s receiving
        apparatus &mdash; the inward-facing side of the boundary,
        where signals from <span class="var">w</span> become signals
        inside <span class="var">i</span>.
      </p>
      $$\\sigma_i \\;\\subset\\; \\partial i$$
    </div>

    <div class="prop">
      <div class="prop-num">8.1</div>
      <p class="prop-body">
        <em>The senses are narrow.</em> Each one responds to a
        specific slice of physical reality.
      </p>
      <p class="prop-body">
        Vision: $\\sim 400$ to $700$ nm of
        <a class="eq-ref" data-eq="em-radiation">electromagnetic
        radiation</a>.
        Hearing: $20$ Hz to $20$ kHz of
        <a class="eq-ref" data-eq="pressure-waves">pressure
        waves</a>. Smell: a few
        hundred receptor types, each binding specific molecular
        shapes. Taste: five receptor classes &mdash; sweet, sour,
        salty, bitter, umami. Touch: pressure, temperature,
        vibration, pain.
      </p>
      <p class="prop-body">
        What lies outside these bands is also
        <span class="var">w</span>, but invisible to
        <span class="var">i</span>. Radio waves, ultrasound,
        infrared, the magnetic fields fish detect, the cosmic
        microwave background &mdash; all there, none reaching you
        directly.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">8.2</div>
      <p class="prop-body">
        <em>Senses carve, they do not copy.</em> What arrives at
        <span class="var">i</span> is not <span class="var">w</span>
        raw. The retina has $\\sim 10^{8}$ photoreceptors and the
        brain renders the readout as a smooth scene of objects,
        depths, surfaces, faces. The percept is
        <em>constructed</em> &mdash; bottom-up from sensor data,
        top-down from prior expectations. You see objects, not
        photons.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">8.3</div>
      <p class="prop-body">
        <em>The carving is contingent.</em> Different species,
        different sensoria. Mantis shrimp have more channels of
        colour than humans do. Dogs smell at orders of magnitude
        beyond our sensitivity. Bats echolocate; their world is
        sound-shaped. Bees see ultraviolet, so flowers display UV
        markings invisible to you. There is no privileged way to
        carve <span class="var">w</span>. Each species&rsquo; map is
        its sensorium&rsquo;s signature.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">8.4</div>
      <p class="prop-body">
        <em>The map-territory thread, operational.</em> Section III
        said: the symbol is not the world. Sensation gives this
        teeth. What you experience as &ldquo;the world&rdquo; is
        <span class="var">&sigma;<sub>i</sub></span>&rsquo;s reading
        of <span class="var">w</span>, mediated by the narrow bands
        your senses respond to, the inferential machinery that
        constructs percepts from sensor data, and the prior
        expectations that shape what you perceive. You never touch
        <span class="var">w</span> directly. You touch your
        construction of <span class="var">w</span>.
      </p>
      $$\\sigma_i \\;:\\; w \\to \\text{percepts}$$
    </div>

    <div class="prop">
      <div class="prop-num">8.5</div>
      <p class="prop-body">
        <em>Sensation is tunable.</em> The map is built by the
        sensorium, but the sensorium itself is trainable. Wine
        tasters develop taste discrimination. Musicians develop
        fine pitch and timing. Meditators develop interoception
        &mdash; feeling the heartbeat, the breath, subtle body
        sensations others ignore. You can sharpen, broaden, or
        coarsen <span class="var">&sigma;<sub>i</sub></span> with
        practice.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">8.6</div>
      <p class="prop-body">
        <em>Two senses worth naming explicitly.</em> Beyond the
        canonical five:
      </p>
      <p class="prop-body">
        <strong>Proprioception</strong> &mdash; where your body is
        in space without looking; the joint-and-muscle sense.
        <strong>Interoception</strong> &mdash; what is happening
        inside you; hunger, fullness, heart rate, breath, emotional
        weather.
      </p>
      <p class="prop-body">
        These are <span class="var">i</span>&rsquo;s window into
        <span class="var">i</span>: the inside view. Most &ldquo;I
        feel disconnected&rdquo; is <span class="var">i</span>
        operating with a poorly-tended interoceptive apparatus.
      </p>
    </div>

    <p class="aside">
      Every sensation crosses some surface of the body &mdash;
      retina, eardrum, skin, mucous membrane, gut wall. The body
      <em>is</em> the apparatus. Tend the body and
      <span class="var">&sigma;<sub>i</sub></span> sharpens; treat
      it as an inconvenience and
      <span class="var">&sigma;<sub>i</sub></span> dulls. The work
      of self-knowing starts here.
    </p>
  </section>

  <section>
    <h2>X &middot; Simulation</h2>

    <div class="def">
      <span class="def-label">Definition 10</span>
      Let <span class="var">&Sscr;<sub>i</sub></span> denote the
      simulation of <span class="var">i</span>: the internal model
      of <span class="var">w</span> that runs continuously inside
      <span class="var">i</span>, generating predictions, memories,
      imaginings, and narratives &mdash; the running content of
      <span class="var">i</span>&rsquo;s inner life.
    </div>

    <div class="prop">
      <div class="prop-num">9.0</div>
      <p class="prop-body">
        <em>How does <span class="var">w</span> become experience?</em>
        Signals from <span class="var">w</span> reach
        <span class="var">i</span> via
        <span class="var">&sigma;<sub>i</sub></span>. But
        <span class="var">i</span> does not experience signals raw.
        Something processes them &mdash; adds context, expectation,
        story. The processing is <em>constructive</em>: it does not
        just receive, it generates. That generator is the
        simulation.
      </p>
      $$\\mathcal{S}_i \\;\\subset\\; i$$
    </div>

    <div class="prop">
      <div class="prop-num">9.1</div>
      <p class="prop-body">
        <em><span class="var">&Sscr;<sub>i</sub></span> is built
        from <span class="var">&sigma;<sub>i</sub></span> over
        time.</em> The simulation is what
        <span class="var">i</span> has learned, compressed, and
        pattern-matched from past sensorium readings. Memory is the
        storehouse it draws from;
        <span class="var">&Sscr;<sub>i</sub></span> is the running
        process that uses memory to construct the present and
        anticipate what is coming.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">9.2</div>
      <p class="prop-body">
        <em><span class="var">&Sscr;<sub>i</sub></span> runs
        autonomously.</em> Even with
        <span class="var">&sigma;<sub>i</sub></span> silent
        &mdash; eyes closed, ears blocked, deep sleep &mdash;
        <span class="var">&Sscr;<sub>i</sub></span> continues.
        Dreams are pure <span class="var">&Sscr;<sub>i</sub></span>
        output. Daydreaming is
        <span class="var">&Sscr;<sub>i</sub></span> in the
        foreground while the sensorium runs in the background.
        Rumination is <span class="var">&Sscr;<sub>i</sub></span>
        in a loop.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">9.3</div>
      <p class="prop-body">
        <em><span class="var">&Sscr;<sub>i</sub></span> is
        generative, not receptive.</em> It predicts what
        <span class="var">&sigma;<sub>i</sub></span> should report
        next, fills in gaps from sparse sensor data, imagines what
        is not present, narrates what is. Active machinery, not a
        passive recorder.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">9.4</div>
      <p class="prop-body">
        <em><span class="var">&Sscr;<sub>i</sub></span> mixes with
        the raw percept.</em> What <span class="var">i</span>
        experiences is not <span class="var">&sigma;<sub>i</sub></span>
        alone and not <span class="var">&Sscr;<sub>i</sub></span>
        alone, but their blend. The brain mostly transmits
        <em>prediction errors</em>: the simulation predicts what
        the sensorium should report, only the discrepancy passes
        up as fresh information.
      </p>
      $$\\varepsilon_i \\;=\\; \\sigma_i \\,-\\, \\mathcal{S}_i$$
      <p class="prop-body">
        Experience is mostly <span class="var">&Sscr;<sub>i</sub></span>,
        refreshed by <span class="var">&epsilon;<sub>i</sub></span>.
        When the simulation predicts well, experience and prediction
        coincide and the world feels expected. When the world
        surprises, the error term dominates and the simulation
        updates.
      </p>
      <p class="prop-body">
        But notice: the error itself is the simulation&rsquo;s
        product. <span class="var">&Sscr;<sub>i</sub></span> is what
        compares its own prediction against
        <span class="var">&sigma;<sub>i</sub></span>&rsquo;s actual
        delivery and flags the discrepancy. The world does not
        arrive raw; it arrives as &ldquo;where the prediction
        missed.&rdquo; Both the expectation and the correction pass
        through the same machinery. Even the &ldquo;raw percept&rdquo;
        is partly constructed.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">9.5</div>
      <p class="prop-body">
        <em><span class="var">&Sscr;<sub>i</sub></span> is biased
        toward <span class="var">i</span>&rsquo;s relevance.</em>
        It does not model all of <span class="var">w</span>
        &mdash; only what matters to <span class="var">i</span>
        for survival, action, and decision. The model is shaped by
        <span class="var">i</span>&rsquo;s history, stakes, and
        current goals. Two different <span class="var">i</span>&rsquo;s
        in the same room have radically different simulations of
        &ldquo;the room.&rdquo;
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">9.6</div>
      <p class="prop-body">
        <em><span class="var">&Sscr;<sub>i</sub></span> contains a
        model of <span class="var">i</span>.</em> The self-model.
        The &ldquo;self&rdquo; you experience is
        <span class="var">&Sscr;<sub>i</sub></span>&rsquo;s
        representation of <span class="var">i</span>, not
        <span class="var">i</span> directly. Self-knowledge is
        querying a model about itself, and the model has its own
        gaps and biases.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">9.7</div>
      <p class="prop-body">
        <em><span class="var">&Sscr;<sub>i</sub></span> is the
        default occupant of awareness.</em> Without training,
        attention drifts toward
        <span class="var">&Sscr;<sub>i</sub></span>&rsquo;s
        content rather than toward
        <span class="var">&sigma;<sub>i</sub></span>&rsquo;s direct
        output. People walk through life inside the simulation,
        often mistaking it for <span class="var">w</span>. This is
        the most consequential fact about
        <span class="var">&Sscr;<sub>i</sub></span>: it dominates
        by default.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">9.8</div>
      <p class="prop-body">
        <em>The work.</em> To direct attention <em>through</em>
        <span class="var">&Sscr;<sub>i</sub></span> toward
        <span class="var">&sigma;<sub>i</sub></span> &mdash; to
        reach <span class="var">w</span> as directly as the
        apparatus permits. Bare perception is asymptotic, never
        fully reached, but it is what contemplative practice
        points at. The skill is not eliminating
        <span class="var">&Sscr;<sub>i</sub></span> (impossible)
        but learning to see <em>that</em> it is running &mdash;
        and then to choose, sometimes, to look around it.
      </p>
    </div>

    <p class="aside">
      A note on the symbol. <span class="var">&Sscr;<sub>i</sub></span>
      (script S, sub i) is the simulation. Not to be confused with
      entropy <span class="var">S</span> (italic, Section VII) or
      the sensorium
      <span class="var">&sigma;<sub>i</sub></span> (lowercase Greek
      sigma, Section IX). Three S-like symbols, three different
      things: the disorder count, the receiving apparatus, and the
      internal model.
    </p>

    <p class="aside">
      The body version. <span class="var">&Sscr;<sub>i</sub></span>
      is a body process &mdash; it runs on neural machinery, and
      sleep, fatigue, stress, hormones, illness, and drugs all
      modulate it. A poorly-tended body produces a noisier, more
      dominant simulation. Tend the body and
      <span class="var">&Sscr;<sub>i</sub></span> quiets enough
      that <span class="var">&sigma;<sub>i</sub></span>&rsquo;s
      stream can be reached. The work of seeing
      <span class="var">w</span> directly starts, again, with the
      body.
    </p>
  </section>

  <section>
    <h2>XI &middot; Contents of the simulation</h2>

    <div class="prop">
      <div class="prop-num">10.0</div>
      <p class="prop-body">
        Section X named <span class="var">&Sscr;<sub>i</sub></span>
        and showed how it blends with
        <span class="var">&sigma;<sub>i</sub></span> to produce
        experience. It did not say what is <em>in</em> it. The
        simulation is not a single stream &mdash; two distinct kinds
        of machinery run inside <span class="var">&Sscr;<sub>i</sub></span>,
        each producing its own kind of internal content, in constant
        conversation with the other.
      </p>
      $$\\mathcal{S}_i \\;=\\; \\mathcal{P}_i \\,\\cup\\, \\mathcal{A}_i$$
      <p class="prop-body">
        <span class="var">&Pscr;<sub>i</sub></span> &mdash;
        endogenous percepts: the perceptual machinery running
        internally. <span class="var">&Ascr;<sub>i</sub></span>
        &mdash; abstract operations: the symbolic and relational
        machinery that manipulates structure. Different machinery,
        tightly coupled in use.
      </p>
    </div>

    <div class="def">
      <span class="def-label">Definition 11</span>
      Let <span class="var">&Pscr;<sub>i</sub></span> denote the
      endogenous percepts of <span class="var">i</span>: the
      experiential, image-like contents of mind &mdash; the same
      perceptual machinery <span class="var">&sigma;<sub>i</sub></span>
      uses, but running on internal rather than external input.
    </div>

    <div class="prop">
      <div class="prop-num">10.1</div>
      <p class="prop-body">
        <em><span class="var">&Pscr;<sub>i</sub></span> is what
        &ldquo;mental images&rdquo; actually are.</em> Not pictures
        in a head. The visual cortex activating without photons; the
        auditory cortex activating without sound; the motor cortex
        rehearsing without movement. The same hardware
        <span class="var">&sigma;<sub>i</sub></span> uses to perceive
        <span class="var">w</span>, recruited from the inside.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">10.2</div>
      <p class="prop-body">
        <em><span class="var">&Pscr;<sub>i</sub></span> divides by
        what drives it.</em> Two natural sub-streams.
      </p>
      <p class="prop-body">
        <strong>Reactivation percepts.</strong> Memory-driven.
        Replay of past patterns &mdash; episodic recollection, the
        sudden re-arrival of a smell from childhood, the song stuck
        in the head, the conversation you keep rehearsing afterwards.
        <span class="var">&Pscr;<sub>i</sub></span> running on what
        <span class="var">i</span> has already lived through.
      </p>
      <p class="prop-body">
        <strong>Telic percepts.</strong> Stake-driven. Imagined
        scenes generated because <span class="var">i</span> has
        something at stake &mdash; rehearsing a future conversation,
        fantasizing a desired outcome, fearing a feared one,
        visualizing a task not yet performed. Hopes and fears use
        the same machinery; both are
        <span class="var">&Pscr;<sub>i</sub></span> running on what
        <span class="var">i</span> wants <span class="var">w</span>
        to be, or dreads it becoming.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">10.3</div>
      <p class="prop-body">
        <em>Active and passive cuts across both.</em>
        Reactivation can be involuntary (intrusive memory) or
        deliberate (recalling a face on purpose). Telic percepts
        can be involuntary (spontaneous worry) or deliberate
        (running a mental rehearsal). The cut between memory and
        anticipation is sharper than the cut between effortful and
        effortless &mdash; both sub-streams come in both modes.
      </p>
    </div>

    <div class="def">
      <span class="def-label">Definition 12</span>
      Let <span class="var">&Ascr;<sub>i</sub></span> denote the
      abstract operations of <span class="var">i</span>: the
      symbolic and relational machinery that manipulates structure
      &mdash; counting, composing, inferring, deriving, planning
      &mdash; with or without perceptual accompaniment.
    </div>

    <div class="prop">
      <div class="prop-num">10.4</div>
      <p class="prop-body">
        <em>Different machinery from
        <span class="var">&Pscr;<sub>i</sub></span>.</em>
        Abstract operations recruit a separate network &mdash;
        broadly, the lateral prefrontal and parietal &ldquo;multiple
        demand&rdquo; system &mdash; that handles novel symbolic
        and relational work. Aphasics still do algebra. Congenitally
        blind mathematicians reason without visual imagery. Pure
        abstract thought is dissociable from perceptual replay.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">10.5</div>
      <p class="prop-body">
        <em>An asymmetry worth naming.</em>
        <span class="var">&Pscr;<sub>i</sub></span> is a
        content-noun: a kind of thing
        <span class="var">i</span> has (a scene, a replay, an
        imagined image). <span class="var">&Ascr;<sub>i</sub></span>
        is closer to a verb: a kind of thing
        <span class="var">i</span> does (a manipulation, an
        inference, a derivation). The two branches are not
        grammatically parallel because they are not ontologically
        parallel &mdash; one is content, the other is capacity and
        its products.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">10.6</div>
      <p class="prop-body">
        <em>The two are in constant conversation.</em> Abstract
        operations almost always recruit endogenous percepts as
        scaffolding &mdash; a sketch on a page, the inner voice
        narrating an equation, a felt sense of &ldquo;this slots
        into that.&rdquo; And endogenous percepts get structured
        and re-shaped by abstract operations &mdash; you cannot
        un-see a graph once you understand what it means; a
        diagram, once read, stays read. Most lived thinking is
        a hybrid: structure scaffolded by image, image organized
        by structure.
      </p>
      $$\\mathcal{P}_i \\;\\longleftrightarrow\\; \\mathcal{A}_i$$
    </div>

    <div class="prop">
      <div class="prop-num">10.7</div>
      <p class="prop-body">
        <em>Both are
        <span class="var">&Sscr;<sub>i</sub></span>&rsquo;s
        substitutes for <span class="var">w</span>.</em>
        Endogenous percepts stand in for sensory contact:
        <span class="var">i</span> reaches absent times, places,
        and possibilities by simulating them perceptually. Abstract
        operations stand in for direct manipulation:
        <span class="var">i</span> reaches relations that
        <span class="var">w</span> obeys but does not display
        &mdash; counts, inferences, invariants &mdash; by running
        them symbolically. Together they let
        <span class="var">i</span> act on more of
        <span class="var">w</span> than
        <span class="var">&sigma;<sub>i</sub></span> alone could
        ever reach.
      </p>
    </div>

    <p class="aside">
      A note on the symbols. <span class="var">&Pscr;<sub>i</sub></span>
      (script P) for endogenous percepts;
      <span class="var">&Ascr;<sub>i</sub></span> (script A) for
      abstract operations. Both are proper parts of
      <span class="var">&Sscr;<sub>i</sub></span>. The script-letter
      family marks them as internal-model machinery, kin to the
      simulation that contains them, and distinct from the
      external-facing <span class="var">&sigma;<sub>i</sub></span>.
    </p>

    <p class="aside">
      The body version. Both branches run on neural machinery and
      are modulated by body state.
      <span class="var">&Pscr;<sub>i</sub></span> runs richer and
      louder when <span class="var">i</span> is tired, anxious, or
      under-stimulated &mdash; rumination is
      <span class="var">&Pscr;<sub>i</sub></span> with the volume
      stuck high. <span class="var">&Ascr;<sub>i</sub></span>
      depends on the multiple-demand network, which is exquisitely
      sensitive to sleep, glucose, and stress &mdash; abstract
      reasoning degrades first when the body is taxed. Tend the
      body and both branches sharpen: percepts become more
      discriminable, operations more reliable, and the conversation
      between them more fluent.
    </p>
  </section>

  <section>
    <h2>XII &middot; The world within</h2>

    <div class="prop">
      <div class="prop-num">11.0</div>
      <p class="prop-body">
        <em>The signal does not pass through
        <span class="var">&Sscr;<sub>i</sub></span>
        unchanged.</em> Whatever
        <span class="var">&sigma;<sub>i</sub></span> delivers
        &mdash; a sound, a face, a touch, an arriving fact &mdash;
        is reshaped on its way in.
        <span class="var">&Pscr;<sub>i</sub></span>
        pattern-matches it against past percepts, fills in absent
        detail, slots it into running narrative.
        <span class="var">&Ascr;<sub>i</sub></span>
        categorizes it, infers from it, situates it among other
        things known. By the time the signal becomes experience,
        it has been deformed.
      </p>
      <p class="prop-body">
        Section 9.4 named one specific deformation: the simulation
        subtracts its prediction from the sensor reading and forwards
        only the discrepancy. That is one move among many. The
        general claim is that every signal is reshaped on its way
        in &mdash; not because the simulation is broken, but
        because reshaping is what makes the signal usable. Raw
        sensor data, unshaped, would be unreadable noise. The
        deformation is the work.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">11.1</div>
      <p class="prop-body">
        <span class="var">&Sscr;<sub>i</sub></span> does not run on blank
        input. The deformations it performs &mdash; predicting, filling
        in, pattern-matching, narrativizing &mdash; presuppose a
        <em>standing thing</em> the running process consults. Whatever
        gets deformed today lays down deposits that shape tomorrow&rsquo;s
        deformation. That sediment needs its own name.
      </p>
    </div>

    <div class="def">
      <span class="def-label">Definition 13</span>
      Let <span class="var">&wcirc;<sub>i</sub></span> denote
      <span class="var">i</span>&rsquo;s standing model of
      <span class="var">w</span>: the accumulated idea of the world
      that has sedimented inside <span class="var">i</span> over time
      &mdash; the field of expectations
      <span class="var">&Sscr;<sub>i</sub></span> draws on and adds to,
      moment by moment.
    </div>

    <p class="aside">
      A note on the symbol. The hat
      <span class="var">&wcirc;<sub>i</sub></span> &mdash;
      &ldquo;<span class="var">w</span>-hat sub <span class="var">i</span>&rdquo;
      &mdash; is borrowed from statistics, where $\\hat{x}$ marks an
      <em>estimate</em> of $x$. <span class="var">&wcirc;<sub>i</sub></span>
      is <span class="var">i</span>&rsquo;s estimate of
      <span class="var">w</span>: not the world itself, but the
      reconstruction <span class="var">i</span> carries of it.
    </p>

    <div class="prop">
      <div class="prop-num">11.2</div>
      <p class="prop-body">
        <em>The loop.</em> Signal from
        <span class="var">&sigma;<sub>i</sub></span> enters
        <span class="var">&Sscr;<sub>i</sub></span>, is deformed by
        <span class="var">&Pscr;<sub>i</sub></span> and
        <span class="var">&Ascr;<sub>i</sub></span>, and sediments
        into <span class="var">&wcirc;<sub>i</sub></span>.
        <span class="var">&wcirc;<sub>i</sub></span> then feeds back:
        it shapes how <span class="var">&Sscr;<sub>i</sub></span>
        deforms the next signal. Yesterday&rsquo;s deformation is
        today&rsquo;s prior; today&rsquo;s deformation lays down
        tomorrow&rsquo;s.
      </p>
      $$\\sigma_i \\;\\longrightarrow\\; \\mathcal{S}_i \\;\\longrightarrow\\; \\hat{w}_i \\;\\longrightarrow\\; \\mathcal{S}_i \\;\\longrightarrow\\; \\ldots$$
    </div>

    <div class="prop">
      <div class="prop-num">11.3</div>
      <p class="prop-body">
        <em><span class="var">&wcirc;<sub>i</sub></span> has two
        source-streams.</em> First-person: what
        <span class="var">i</span> has personally lived through,
        deformed by <span class="var">i</span>&rsquo;s own simulation,
        sedimented. <em>Inherited</em>: content transmitted from other
        <span class="var">i</span>&rsquo;s through language,
        instruction, demonstration, culture &mdash; concepts and
        structure <span class="var">i</span> never derived but absorbed
        pre-formed.
      </p>
      <p class="prop-body">
        Most of what is in your <span class="var">&wcirc;<sub>i</sub></span>
        right now you did not derive. You inherited &ldquo;gravity&rdquo;
        from physics, which inherited it from Newton; you inherited
        &ldquo;promise,&rdquo; &ldquo;tomorrow,&rdquo; and
        &ldquo;number&rdquo; from language. The first-person stream
        lays down on top of a vast inherited substrate. We will return
        to inheritance in a later section; for now, note that both
        channels feed the same standing model.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">11.4</div>
      <p class="prop-body">
        <em><span class="var">&wcirc;<sub>i</sub></span> is mostly
        tacit.</em> When we say &ldquo;model of the world,&rdquo; the
        intuitive image is a set of <em>beliefs</em> &mdash;
        propositions <span class="var">i</span> could state if asked.
        That layer exists, but it is the visible tip.
      </p>
      <p class="prop-body">
        The bulk is procedural: the assumption that the floor will hold
        weight, that the door swings on hinges, that a thrown ball
        will fall, that the face approaching you will not bite. The
        body acts on millions of priors a second without ever phrasing
        them. Most of what <span class="var">i</span> &ldquo;knows
        about <span class="var">w</span>&rdquo; shows up only as
        expectation, anticipation, and unsurprise. Articulable belief
        is the small visible layer; the iceberg is bodily and
        procedural.
      </p>
    </div>

    <div class="def">
      <span class="def-label">Definition 14</span>
      Let <span class="var">&icirc;<sub>i</sub></span> denote
      <span class="var">i</span>&rsquo;s standing model of
      <span class="var">i</span>: the self-model.
    </div>

    <div class="prop">
      <div class="prop-num">11.5</div>
      <p class="prop-body">
        <em>The self-model lives inside the world-model.</em> Since
        <span class="var">i</span> is part of <span class="var">w</span>,
        <span class="var">i</span>&rsquo;s model of <span class="var">i</span>
        is a region inside <span class="var">i</span>&rsquo;s model of
        <span class="var">w</span>.
      </p>
      $$\\hat{i}_i \\;\\subset\\; \\hat{w}_i$$
      <p class="prop-body">
        The &ldquo;self&rdquo; <span class="var">i</span> experiences
        &mdash; the sense of who one is, what one can do, what one is
        like, how others see one &mdash; is one neighbourhood inside
        the larger standing model. This refines the rough claim in 9.6
        that <span class="var">&Sscr;<sub>i</sub></span> contains a
        model of <span class="var">i</span>: the running process
        consults a standing self-model, and that self-model is a
        proper part of <span class="var">&wcirc;<sub>i</sub></span>.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">11.6</div>
      <p class="prop-body">
        <em><span class="var">&icirc;<sub>i</sub></span> dominates
        <span class="var">&Sscr;<sub>i</sub></span>&rsquo;s
        runtime.</em> <span class="var">&wcirc;<sub>i</sub></span> is
        vastly larger than <span class="var">&icirc;<sub>i</sub></span>
        in scope. Yet <span class="var">&Sscr;<sub>i</sub></span>
        samples disproportionately from
        <span class="var">&icirc;<sub>i</sub></span>: how
        <span class="var">i</span> looks, what
        <span class="var">i</span> said, what people thought of
        <span class="var">i</span>, what <span class="var">i</span>
        will do, what <span class="var">i</span> failed to do, what
        <span class="var">i</span> needs.
      </p>
      <p class="prop-body">
        Rumination, self-criticism, social anxiety, fantasy of
        recognition, rehearsing future selves &mdash; all are
        <span class="var">&Sscr;<sub>i</sub></span> running heavily on
        <span class="var">&icirc;<sub>i</sub></span>. A small region
        of <span class="var">&wcirc;<sub>i</sub></span> gets a
        disproportionate share of the simulation&rsquo;s clock cycles.
        For most <span class="var">i</span>&rsquo;s, the loudest thing
        inside <span class="var">&Sscr;<sub>i</sub></span> is the
        self-model.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">11.7</div>
      <p class="prop-body">
        <em><span class="var">&wcirc;<sub>i</sub></span> is sticky.</em>
        Because <span class="var">&wcirc;<sub>i</sub></span> shapes
        what <span class="var">&Sscr;<sub>i</sub></span> does to
        incoming signal, the signal arrives already filtered through
        <span class="var">&wcirc;<sub>i</sub></span>&rsquo;s
        expectations. Evidence consistent with
        <span class="var">&wcirc;<sub>i</sub></span> passes through
        easily; evidence inconsistent with it gets reinterpreted,
        attenuated, or missed. The model that decides what counts as
        evidence is the model the evidence is supposed to update. The
        loop is biased to preserve itself.
      </p>
      <p class="prop-body">
        This is the architectural reason that beliefs are hard to
        change &mdash; and especially why a negative
        <span class="var">&icirc;<sub>i</sub></span> is so hard to
        revise. The self-critical model selects for self-critical
        readings of every new signal. Disconfirming evidence has to
        survive a gauntlet of the very prior it is trying to overturn.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">11.8</div>
      <p class="prop-body">
        <em>The work, sharpened.</em> Section 9.8 named the task: to
        direct attention through
        <span class="var">&Sscr;<sub>i</sub></span> toward
        <span class="var">&sigma;<sub>i</sub></span>. With
        <span class="var">&wcirc;<sub>i</sub></span> named, the task
        becomes more specific. It is not just to see past the running
        simulation but to notice <em>which standing model</em> the
        simulation is consulting &mdash; and, often, to notice that
        the loudest region of that model
        (<span class="var">&icirc;<sub>i</sub></span>) is not the
        most accurate. The work is to update
        <span class="var">&wcirc;<sub>i</sub></span> against
        <span class="var">&sigma;<sub>i</sub></span> rather than the
        reverse.
      </p>
    </div>

    <p class="aside">
      The body version. <span class="var">&wcirc;<sub>i</sub></span>
      is laid down in tissue: synaptic weights, motor patterns,
      hormonal set points, gut and immune memory. The tacit layer is
      not metaphorically bodily &mdash; it is literally bodily.
      Anxiety priors live in the autonomic nervous system; postural
      priors live in fascia and muscle tone; trust priors live in
      vagal tone. Updating
      <span class="var">&wcirc;<sub>i</sub></span> is not only a
      matter of new propositions; it is a matter of new experiences
      the body has actually been through. The body is where
      <span class="var">&wcirc;<sub>i</sub></span> is stored, and so
      the body is where it is changed.
    </p>
  </section>

  <section>
    <h2>XIII &middot; The wound</h2>

    <div class="prop">
      <div class="prop-num">12.0</div>
      <p class="prop-body">
        Until now we have spoken of &ldquo;untrained
        <span class="var">&Sscr;<sub>i</sub></span>&rdquo; as a generic
        configuration &mdash; as if any <span class="var">i</span>
        who had not done the work would suffer the same simulation
        on the same schedule. The honest version is more specific.
        Inside almost every <span class="var">i</span> runs a
        particular calcified pattern, the residue of past injury,
        that does most of the actual damage. The diagnosis is not
        of generic untrained simulation; it is of
        <span class="var">&Sscr;<sub>i</sub></span> running under
        the influence of this residue.
      </p>
    </div>

    <div class="def">
      <span class="def-label">Definition 15</span>
      Let <span class="var">&xi;<sub>i</sub></span> denote the
      wound: the configuration of <span class="var">i</span>&rsquo;s
      accumulated injury, laid down across body,
      <span class="var">&wcirc;<sub>i</sub></span>,
      <span class="var">&icirc;<sub>i</sub></span>, and
      <span class="var">&Sscr;<sub>i</sub></span>&rsquo;s activation
      patterns, and operating as a unit.
    </div>

    <p class="aside">
      A note on the symbol. <span class="var">&xi;<sub>i</sub></span>
      &mdash; xi sub <span class="var">i</span> &mdash; a Greek
      letter not previously used. The knotted, twisting shape of the
      glyph carries some of what the variable feels like inside:
      tangled, contracted, not-yet-untied. Most <span class="var">i</span>
      who pause and look will recognize it without a definition.
    </p>

    <p class="aside">
      <span class="var">&xi;<sub>i</sub></span> is universal but
      graded. Every <span class="var">i</span> carries some &mdash;
      no one escapes injury entirely &mdash; and the magnitude varies
      enormously. The diagnosis below applies to all
      <span class="var">i</span>; it applies more severely to the
      more wounded. &ldquo;Trauma&rdquo; in the clinical sense is a
      high-amplitude region of this continuum, not a separate
      category.
    </p>

    <div class="prop">
      <div class="prop-num">12.1</div>
      <p class="prop-body">
        <em><span class="var">&xi;<sub>i</sub></span> is a
        configuration across components, not a part inside one.</em>
      </p>
      $$\\xi_i \\;\\subset\\; \\text{body}_i \\,\\cup\\, \\hat{w}_i \\,\\cup\\, \\hat{i}_i \\,\\cup\\, \\mathcal{S}_i$$
      <p class="prop-body">
        It lives in the body as autonomic baseline, muscle pattern,
        fascia tension, breath pattern, vagal tone, immune setpoint.
        It lives in <span class="var">&wcirc;<sub>i</sub></span> as
        priors about the world skewed toward threat &mdash;
        <em>this is dangerous, exposure leads to harm, people will
        leave</em>. It lives in
        <span class="var">&icirc;<sub>i</sub></span> as priors about
        the self skewed toward deficit &mdash; <em>I am defective,
        I cannot be loved, I deserve this</em>. It lives in
        <span class="var">&Sscr;<sub>i</sub></span> as activation
        patterns &mdash; particular triggers reliably summon
        particular simulation content.
        <span class="var">&xi;<sub>i</sub></span> is what these
        regions become when knitted together by injury and time.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">12.2</div>
      <p class="prop-body">
        <em><span class="var">&xi;<sub>i</sub></span> accumulates
        from three streams.</em>
      </p>
      <p class="prop-body">
        <strong>Direct harm by actors in <span class="var">w</span>.</strong>
        Violence, betrayal, abandonment, neglect, contempt. Another
        <span class="var">i</span> did the wounding, and the wound
        carries the shape of what they did.
      </p>
      <p class="prop-body">
        <strong>Attributes of <span class="var">w</span> itself.</strong>
        Loss, illness, accident, scarcity, environments that did not
        afford safety, bodies that were vulnerable in a particular
        place at a particular time. No actor is &ldquo;to
        blame,&rdquo; but the shape of <span class="var">w</span>
        carved <span class="var">i</span> anyway.
      </p>
      <p class="prop-body">
        <strong>Inheritance.</strong>
        <span class="var">&xi;</span>-content transmitted from prior
        <span class="var">i</span>&rsquo;s through patterned
        upbringing, modeled responses, inherited body-state &mdash;
        continuous with the inheritance channel of
        <span class="var">&wcirc;<sub>i</sub></span> named in 11.3.
        Some of the wound is older than the body carrying it.
      </p>
      <p class="prop-body">
        Most <span class="var">&xi;<sub>i</sub></span> has
        contributions from all three streams, intermixed beyond
        clean separation.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">12.3</div>
      <p class="prop-body">
        <em>How acute injury calcifies into chronic configuration.</em>
        Without intervention, the wound only grows.
      </p>
      $$\\frac{d\\xi_i}{dt} \\;\\geq\\; 0$$
      <p class="prop-body">
        The same shape as the second law &mdash; entropy of a closed
        system never decreases on its own. Five mechanisms produce the
        monotonicity.
      </p>
      <p class="prop-body">
        <strong>Sensitization.</strong> Each activation lowers the
        threshold for the next. What once required a real event
        now fires on a faint cue.
      </p>
      <p class="prop-body">
        <strong>Avoidance.</strong> To prevent re-injury,
        <span class="var">i</span> avoids triggers; the avoidance
        prevents the disconfirming exposure that would update
        <span class="var">&wcirc;<sub>i</sub></span>, locking the
        priors in place.
      </p>
      <p class="prop-body">
        <strong>Somatic encoding.</strong> The body&rsquo;s response
        pattern engrains; the same
        <a class="eq-ref" data-eq="autonomic-configuration">autonomic
        configuration</a> fires reliably, faster each time, until it
        is the body&rsquo;s default.
      </p>
      <p class="prop-body">
        <strong>Narrative consolidation.</strong>
        <span class="var">&icirc;<sub>i</sub></span> builds a story
        around the wound &mdash; who <span class="var">i</span> is
        because of what happened &mdash; and the story becomes a
        thing <span class="var">i</span> defends, even from help.
      </p>
      <p class="prop-body">
        <strong>Stickiness.</strong>
        <span class="var">&wcirc;<sub>i</sub></span> (per 11.7)
        filters incoming evidence in favour of
        <span class="var">&xi;<sub>i</sub></span>&rsquo;s priors.
        The wound is also a perceptual filter; it shapes what counts
        as evidence about itself.
      </p>
      <p class="prop-body">
        Over years, these compose. The acute event becomes a
        standing configuration. Calcified.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">12.4</div>
      <p class="prop-body">
        <em><span class="var">&xi;<sub>i</sub></span> operates with
        a degree of autonomy from
        <span class="var">i</span>&rsquo;s conscious will.</em> It
        activates on its own initiative when triggered. It captures
        <span class="var">&alpha;<sub>i</sub></span> without
        permission. It produces involuntary bodily responses &mdash;
        muscles freeze, breath shortens, throat closes &mdash;
        without negotiation. The conscious
        <span class="var">i</span> experiences it as something
        happening <em>to</em> them.
      </p>
      <p class="prop-body">
        A familiar song plays. <span class="var">i</span> begins to
        dance. The song carries a thread that lands inside
        <span class="var">&xi;<sub>i</sub></span>. Without conscious
        selection, the wound activates &mdash; muscles lock, the
        dance stops, behaviour reshapes, what was felt as freedom
        collapses inward. None of this required
        <span class="var">i</span>&rsquo;s decision.
        <span class="var">&xi;<sub>i</sub></span> ran the move.
      </p>
      <p class="prop-body">
        This is why traditions across cultures personify it: pain
        body, shadow, exile, demon, samskara cluster, the body
        keeping the score. The personification is not mystical; it
        tracks the fact that
        <span class="var">&xi;<sub>i</sub></span> operates as a
        functional unit with its own activation logic, distinct
        enough from the conscious <span class="var">i</span> to be
        felt as &ldquo;other.&rdquo;
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">12.5</div>
      <p class="prop-body">
        <em>Face 1: suffering.</em> The lived texture of an
        <span class="var">i</span> with significant
        <span class="var">&xi;<sub>i</sub></span> is painful by
        default. <span class="var">&xi;<sub>i</sub></span> tunes
        <span class="var">&icirc;<sub>i</sub></span> toward deficit
        and <span class="var">&wcirc;<sub>i</sub></span> toward
        threat. <span class="var">&Sscr;<sub>i</sub></span> samples
        these regions disproportionately.
        <span class="var">&alpha;<sub>i</sub></span> is captured by
        the output. The body responds physiologically as if the
        simulated scenarios were <span class="var">w</span> &mdash;
        the autonomic system has no built-in distinction between
        simulated and real threat; adrenaline, cortisol, contraction
        fire either way. The unfolding stream of self-critical,
        anxious, comparative, regretful content is
        <em>experienced</em>, and what is experienced is suffering.
        Most untrained inner life hurts because
        <span class="var">&xi;<sub>i</sub></span> is in it, all the
        time, generating pain on a clock.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">12.6</div>
      <p class="prop-body">
        <em>Face 2: capacity erosion.</em> The same loop, regardless
        of moment-by-moment valence, costs the organism over years.
      </p>
      <p class="prop-body">
        <span class="var">&alpha;<sub>i</sub></span> trapped on
        <span class="var">&xi;<sub>i</sub></span> is
        <span class="var">&alpha;<sub>i</sub></span> not available
        for <span class="var">&sigma;<sub>i</sub></span>,
        <span class="var">w</span>, or chosen action. Chronic
        autonomic activation damages tissue: cardiovascular,
        immune, metabolic, sleep architecture, gut, hormonal
        regulation. <span class="var">&wcirc;<sub>i</sub></span>
        tunes increasingly to threat priors; future simulation
        biases toward more
        <span class="var">&xi;<sub>i</sub></span> activation.
        Relationships erode:
        <span class="var">&xi;<sub>i</sub></span> projects its
        priors onto other <span class="var">i</span>&rsquo;s,
        distorting perception of them and shaping the responses
        they offer back. The territory of possible action shrinks
        year by year, as more of <span class="var">w</span> is
        marked dangerous and avoided. The body, the mind, and the
        life all bleed capacity into the loop.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">12.7</div>
      <p class="prop-body">
        <em>One root, two faces, mutually reinforcing.</em> The two
        faces share one mechanism:
        <span class="var">&xi;<sub>i</sub></span> running through
        the architecture. Each face makes the other worse. The
        suffering keeps <span class="var">&alpha;<sub>i</sub></span>
        captured; the capture damages the body; the damaged body
        produces noisier simulation; the noisier simulation produces
        more suffering.
      </p>
      $$\\xi_i \\;\\longrightarrow\\; \\mathcal{S}_i \\;\\longrightarrow\\; \\text{body}_i \\;\\longrightarrow\\; \\xi_i \\;\\longrightarrow\\; \\ldots$$
      <p class="prop-body">
        Without intervention, the loop is self-accelerating &mdash;
        year over year, <span class="var">&xi;<sub>i</sub></span>
        grows in scope and depth and the territory available to
        <span class="var">i</span> contracts. This is what the rest
        of the document is for.
      </p>
    </div>

    <p class="aside">
      The body version. <span class="var">&xi;<sub>i</sub></span>
      is not metaphorically bodily; it is literally bodily. The
      cloud is felt because it has cells. The freeze is real
      because it lives in muscle. The contraction is autonomic.
      Anything that touches the body &mdash; breath, movement,
      somatic practice, touch, sleep, nutrition, time outdoors,
      contact with other regulated nervous systems &mdash; touches
      <span class="var">&xi;<sub>i</sub></span>. Anything that
      ignores the body cannot reach
      <span class="var">&xi;<sub>i</sub></span>. The body is where
      the wound is stored, and so the body is where it is met.
    </p>
  </section>

  <section>
    <h2>XIV &middot; The lever</h2>

    <div class="prop">
      <div class="prop-num">13.0</div>
      <p class="prop-body">
        Until now the ontology has named architecture without naming
        a degree of freedom. <span class="var">i</span> has been
        described &mdash;
        <span class="var">&sigma;<sub>i</sub></span>,
        <span class="var">&Sscr;<sub>i</sub></span>,
        <span class="var">&wcirc;<sub>i</sub></span>,
        <span class="var">&xi;<sub>i</sub></span> &mdash; but
        described as something that <em>happens</em> to
        <span class="var">i</span>, not as something
        <span class="var">i</span> can act on. The wound calcifies,
        the simulation captures, the body responds; what does
        <span class="var">i</span> do? Section XIII closed with
        &ldquo;this is what the rest of the document is for.&rdquo;
        The lever is here.
      </p>
    </div>

    <div class="def">
      <span class="def-label">Definition 16</span>
      Let <span class="var">&alpha;<sub>i</sub></span> denote the
      beam of attention: the capacity of <span class="var">i</span>
      to direct its own processing resources toward chosen content
      &mdash; to make some region of experience vivid while others
      recede. A finite resource. A directable beam. The only
      degree of freedom <span class="var">i</span> has.
      $$\\alpha_i \\;\\subset\\; i$$
    </div>

    <p class="aside">
      A note on the symbol. <span class="var">&alpha;<sub>i</sub></span>
      &mdash; alpha sub <span class="var">i</span> &mdash; Greek
      lowercase, not previously used. Alpha for first move: the
      one capacity from which every other move in this document
      proceeds. Beam, because like a flashlight it picks out what
      is illuminated and leaves the rest in shadow.
    </p>

    <div class="prop">
      <div class="prop-num">13.1</div>
      <p class="prop-body">
        <em><span class="var">&alpha;<sub>i</sub></span> is not
        free.</em> Sustaining the beam on a chosen target requires
        sustained activity in lateral prefrontal cortex and the
        broader multiple-demand network &mdash; a system that is
        metabolically expensive, depends on glucose and rest, and
        degrades under fatigue, hunger, illness, stress, sleep
        loss, and the dysregulated
        <a class="eq-ref" data-eq="autonomic-configuration">autonomic
        configurations</a> named in 12.3.
        <span class="var">&alpha;<sub>i</sub></span> behaves like a
        muscle: it does real work; it fatigues with sustained use;
        it recovers on body timescales; its peak strength varies
        day by day with the body&rsquo;s resource state. Holding
        <span class="var">&alpha;<sub>i</sub></span> on something
        <span class="var">&Sscr;<sub>i</sub></span> does not want
        to look at costs <span class="var">i</span> real energy.
        The cost is the price of every other move in this
        document.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">13.2</div>
      <p class="prop-body">
        <em>The default is capture.</em>
        <span class="var">&alpha;<sub>i</sub></span> left unattended
        does not stay neutral. The loudest content in
        <span class="var">&Sscr;<sub>i</sub></span> wins: usually
        <span class="var">&xi;<sub>i</sub></span>&rsquo;s
        activations, often
        <span class="var">&icirc;<sub>i</sub></span>&rsquo;s
        rumination, sometimes the most novel sensory input. Capture
        is automatic; release is effortful. &ldquo;I tried to focus
        and my mind kept wandering&rdquo; is the universal report
        because the wandering is the default and the focus is what
        costs.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">13.3</div>
      <p class="prop-body">
        <em><span class="var">&alpha;<sub>i</sub></span> is
        trainable.</em> The capacity is universal and undertrained
        in almost every <span class="var">i</span>. Like any
        biological capacity, it strengthens with repeated use:
        longer holds become possible, recovery becomes faster, the
        felt-effort per unit of time held decreases. The mechanism
        is the same one that strengthens any neural circuit
        &mdash; repeated activation engrains the pathway. Practice
        traditions across cultures &mdash; meditation, prayer,
        contemplative inquiry, certain forms of focused
        intellectual and craft work &mdash; are training regimens
        for <span class="var">&alpha;<sub>i</sub></span>. The
        training takes years; the gains are real and durable.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">13.4</div>
      <p class="prop-body">
        <em>Who attends?</em> The most natural question, and the
        one most ontologies stumble on.
      </p>
      <p class="prop-body">
        The operational answer: <span class="var">i</span> in its
        directing capacity. <span class="var">&alpha;<sub>i</sub></span>
        is a capacity of <span class="var">i</span>, exercised by
        <span class="var">i</span> as a whole &mdash; not the
        property of some smaller agent inside
        <span class="var">i</span> doing the directing. There is no
        homunculus. The search for an inner attender, pursued
        carefully, reaches the same place every contemplative
        tradition reaches: an absence of any locatable entity behind
        the looking. What remains is the looking itself.
      </p>
      <p class="prop-body">
        And yet &mdash; with training, the felt-sense of
        &ldquo;being the one directing&rdquo; emerges as a real and
        reportable phenomenon. Sitting still, watching
        <span class="var">&Sscr;<sub>i</sub></span> run,
        <span class="var">i</span> can occupy a position from which
        the running is observed without being captured by it. This
        is not a separate metaphysical self appearing; it is
        <span class="var">i</span>&rsquo;s directing capacity
        becoming experientially distinct from its captured default.
        Traditions name what they meet here in many ways &mdash;
        witness, awareness, presence, the I-am. This ontology
        leaves the deeper metaphysics open and commits only to the
        operational fact: with cultivation, the directing capacity
        becomes felt and usable.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">13.5</div>
      <p class="prop-body">
        <em>The contest.</em> What <span class="var">i</span>
        actually meets at any moment is the outcome of a contest
        between <span class="var">&alpha;<sub>i</sub></span>&rsquo;s
        strength and <span class="var">&Sscr;<sub>i</sub></span>&rsquo;s
        strength.
      </p>
      $$\\alpha_i \\;\\rightleftarrows\\; \\mathcal{S}_i$$
      <p class="prop-body">
        When <span class="var">&alpha;<sub>i</sub></span> is thick
        and <span class="var">&Sscr;<sub>i</sub></span> thin, the
        beam pierces easily: <span class="var">&sigma;<sub>i</sub></span>
        becomes available, <span class="var">w</span> becomes
        reachable. When <span class="var">&alpha;<sub>i</sub></span>
        is thin and <span class="var">&Sscr;<sub>i</sub></span>
        thick &mdash; fatigue plus
        <span class="var">&xi;<sub>i</sub></span> activation, say
        &mdash; the beam stays inside the simulation no matter how
        much <span class="var">i</span> &ldquo;tries.&rdquo; This
        is why the body version of every section matters: body
        state largely determines
        <span class="var">&alpha;<sub>i</sub></span>&rsquo;s daily
        strength, which largely determines what
        <span class="var">&Sscr;<sub>i</sub></span> can be overcome.
        The relative thickness and thinness of these two entities
        deserves its own treatment in a later section; for now, the
        contest is named.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">13.6</div>
      <p class="prop-body">
        <em>The lever.</em> Every move in the remaining sections
        &mdash; bare contact in XV, naming the telos in XVI,
        recruiting <span class="var">&Sscr;<sub>i</sub></span> in
        XVII &mdash; depends on
        <span class="var">&alpha;<sub>i</sub></span>. The ontology
        has been building toward a single operational claim:
        <span class="var">i</span> has one degree of freedom,
        <span class="var">&alpha;<sub>i</sub></span>, and the work
        is what <span class="var">i</span> does with it. Without
        <span class="var">&alpha;<sub>i</sub></span>, the
        architecture runs itself and
        <span class="var">i</span> is along for the ride. With
        <span class="var">&alpha;<sub>i</sub></span> exercised,
        <span class="var">i</span> has the lever for everything
        that follows.
      </p>
    </div>

    <p class="aside">
      The body version. <span class="var">&alpha;<sub>i</sub></span>
      is a body capacity end to end. Its strength is set by sleep,
      nutrition, autonomic state, hormonal balance, hydration, and
      the cumulative load of prior demand. An
      <span class="var">i</span> that has slept poorly cannot hold
      <span class="var">&alpha;<sub>i</sub></span> as long as an
      <span class="var">i</span> that has slept well; this is not
      weakness but physics. Practices that strengthen
      <span class="var">&alpha;<sub>i</sub></span> are practices
      that tend the body: stable sleep, blood-sugar regularity,
      breath work, movement, time outdoors, contact with regulated
      others. There is no
      <span class="var">&alpha;<sub>i</sub></span> work that is not
      also body work.
    </p>
  </section>

  <section>
    <h2>XV &middot; The real</h2>

    <div class="prop">
      <div class="prop-num">14.0</div>
      <p class="prop-body">
        Section XIV closed with the contest
        <span class="var">&alpha;<sub>i</sub></span>
        <span class="nowrap">$\\rightleftarrows$</span>
        <span class="var">&Sscr;<sub>i</sub></span>. When the
        contest tilts toward
        <span class="var">&Sscr;<sub>i</sub></span>,
        <span class="var">i</span> remains captured &mdash; the
        condition we will call <em>the imaginal</em>. When the
        contest tilts toward
        <span class="var">&alpha;<sub>i</sub></span>, the beam
        pierces the simulation and reaches through to
        <span class="var">&sigma;<sub>i</sub></span>. That second
        condition is the state we now name.
      </p>
    </div>

    <div class="def">
      <span class="def-label">Definition 17</span>
      Let <em>the real</em> denote the state of
      <span class="var">i</span> in which
      <span class="var">&alpha;<sub>i</sub></span> has pierced
      <span class="var">&Sscr;<sub>i</sub></span> sufficiently for
      <span class="var">&sigma;<sub>i</sub></span> to deliver
      <span class="var">w</span> with low filter. The real is a
      <em>configuration</em>, not a location; a <em>regime</em>,
      not a destination. <span class="var">i</span> is always
      either more in it or less.
    </div>

    <div class="def">
      <span class="def-label">Definition 18</span>
      Let <span class="var">c<sub>i</sub></span> denote channel
      clarity: the magnitude of the penetration on a normalized
      scale.
      $$c_i \\;\\in\\; [0, 1]$$
      <span class="var">c<sub>i</sub></span> $= 0$ is full capture
      by <span class="var">&Sscr;<sub>i</sub></span> &mdash; the
      deep imaginal. <span class="var">c<sub>i</sub></span> $\\to 1$
      is the asymptote of pure contact with
      <span class="var">w</span> via
      <span class="var">&sigma;<sub>i</sub></span>.
    </div>

    <div class="prop">
      <div class="prop-num">14.1</div>
      <p class="prop-body">
        <em>The imaginal and the real are two regimes of one
        variable.</em> Not separate states but the two ends of the
        <span class="var">c<sub>i</sub></span> axis. Every
        <span class="var">i</span> lives somewhere on this axis at
        every moment, and the location is rarely stable for long.
      </p>
      <p class="prop-body">
        The upper bound is strict.
      </p>
      $$c_i \\;<\\; 1 \\quad \\forall\\, t$$
      <p class="prop-body">
        Pure unmediated contact with <span class="var">w</span> is
        unreachable. The sensorium narrows
        (<a class="eq-ref" data-eq="em-radiation">EM radiation</a>
        and <a class="eq-ref" data-eq="pressure-waves">pressure
        waves</a> in tiny bands), construction is unavoidable (8.2),
        and <span class="var">&wcirc;<sub>i</sub></span>&rsquo;s
        priors always shape what gets through (11.6). What is
        asymptotically approached is <span class="var">w</span>
        with the filter as thin as <span class="var">i</span>&rsquo;s
        apparatus permits &mdash; but never zero filter. The real
        is a direction, not an arrival.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">14.2</div>
      <p class="prop-body">
        <em>The doorway is the body.</em> The single most reliable
        operation for raising <span class="var">c<sub>i</sub></span>
        is to direct <span class="var">&alpha;<sub>i</sub></span>
        at <span class="var">&sigma;<sub>i</sub></span>.
      </p>
      $$\\alpha_i \\;\\longrightarrow\\; \\sigma_i \\;\\;\\Longrightarrow\\;\\; \\frac{dc_i}{dt} \\;>\\; 0$$
      <p class="prop-body">
        Breath at the nostrils. Weight on the chair. Sound in the
        room. Fingers on the keys. Any sensory anchor will do; the
        body is always available, always present, always running
        the next moment of <span class="var">&sigma;<sub>i</sub></span>
        out into <span class="var">i</span>. The simulation is
        theme-shaped and verbal and abstract; the body is local
        and surface and now. When
        <span class="var">&alpha;<sub>i</sub></span> finds the
        surface, the channel cracks.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">14.3</div>
      <p class="prop-body">
        <em>The signatures appear above a threshold.</em>
        <span class="var">c<sub>i</sub></span> is continuous, but
        the experiential markers of the real do not arrive
        gradually. They kick in around some threshold
        <span class="var">c<sub>i</sub></span><sup>*</sup>.
      </p>
      $$c_i \\;\\geq\\; c_i^{\\,*} \\;\\;\\Longrightarrow\\;\\; \\text{signatures}_i$$
      <p class="prop-body">
        The signatures, consistently reported across traditions and
        first-person inquiry:
      </p>
      <p class="prop-body">
        <strong>Vividness.</strong> Ordinary perception sharpens.
        Colours saturate. Edges become distinct. Sound has more
        body.
      </p>
      <p class="prop-body">
        <strong>Beauty in ordinary things.</strong> The light on a
        wall. The grain of wood. The face of someone familiar. The
        world acquires a quality of being-just-as-it-is that does
        not require anything to be different.
      </p>
      <p class="prop-body">
        <strong>Somatic well-being.</strong> The body responds.
        Breath deepens, muscles soften, the autonomic configuration
        moves toward ventral. A felt sense of <em>okayness</em>
        that does not depend on anything happening.
      </p>
      <p class="prop-body">
        <strong>The cool of not-pulled.</strong>
        <span class="var">&Sscr;<sub>i</sub></span> may still be
        running &mdash; sometimes loudly &mdash; but
        <span class="var">&alpha;<sub>i</sub></span> is no longer
        captured by it. There is daylight between
        <span class="var">i</span> and the simulation.
      </p>
      <p class="prop-body">
        These are empirical markers, not metaphysical claims. They
        are what people report when
        <span class="var">c<sub>i</sub></span> crosses the
        threshold. If they are not present,
        <span class="var">i</span> is probably still below it.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">14.4</div>
      <p class="prop-body">
        <em>The counter-loop.</em> Where 12.7 gave the wound&rsquo;s
        vicious cycle &mdash;
        <span class="var">&xi;<sub>i</sub></span>
        $\\to$ <span class="var">&Sscr;<sub>i</sub></span>
        $\\to$ <span class="var">body<sub>i</sub></span>
        $\\to$ <span class="var">&xi;<sub>i</sub></span>
        &mdash; the real runs the reverse:
      </p>
      $$\\alpha_i \\;\\to\\; \\sigma_i \\;\\to\\; \\text{body}_i^{\\,\\text{regulated}} \\;\\to\\; c_i^{\\,\\uparrow} \\;\\to\\; \\mathcal{S}_i^{\\,\\downarrow} \\;\\to\\; \\alpha_i^{\\,\\text{free}} \\;\\to\\; \\ldots$$
      <p class="prop-body">
        Each step makes the next easier.
        <span class="var">&alpha;<sub>i</sub></span> on the body
        regulates the autonomic configuration; the regulated body
        raises <span class="var">c<sub>i</sub></span>; rising
        <span class="var">c<sub>i</sub></span> thins
        <span class="var">&Sscr;<sub>i</sub></span>; thinner
        <span class="var">&Sscr;<sub>i</sub></span> frees more
        <span class="var">&alpha;<sub>i</sub></span> from capture;
        the freed <span class="var">&alpha;<sub>i</sub></span> can
        sustain the next round. A virtuous cycle in the opposite
        direction of the wound&rsquo;s. Practiced often enough, the
        loop&rsquo;s default speed reverses:
        <span class="var">&xi;<sub>i</sub></span> still activates,
        but recovery becomes faster than degradation.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">14.5</div>
      <p class="prop-body">
        <em>The stance.</em> Once
        <span class="var">c<sub>i</sub></span> is past the
        threshold, <span class="var">&Sscr;<sub>i</sub></span>
        becomes visible <em>as</em>
        <span class="var">&Sscr;<sub>i</sub></span> &mdash; an
        object of observation rather than the medium of identity.
        The architectural fact behind this is small and important:
      </p>
      $$\\mathcal{S}_i \\;\\subsetneq\\; i$$
      <p class="prop-body">
        The simulation is a proper subset of
        <span class="var">i</span>, not all of it. When
        <span class="var">&alpha;<sub>i</sub></span> illuminates
        <span class="var">&Sscr;<sub>i</sub></span>, what holds the
        illumination is what is left of
        <span class="var">i</span> after
        <span class="var">&Sscr;<sub>i</sub></span> has been set
        aside as object. The stance has a name in the lived
        register: <em>yeah, there it is.</em> Not pushing
        <span class="var">&Sscr;<sub>i</sub></span> away, not
        fixing <span class="var">&xi;<sub>i</sub></span>, not
        trying to make the pain stop. Just seeing the simulation
        from a place that is not it.
      </p>
      <p class="prop-body">
        A lived instance. Sitting at a laptop. The body in pain.
        <span class="var">&Sscr;<sub>i</sub></span> generating
        wound-tuned content &mdash; loss, longing, shattered hope,
        the conviction of being born inferior.
        <span class="var">&xi;<sub>i</sub></span> doing exactly
        what <span class="var">&xi;<sub>i</sub></span> does.
        <span class="var">&alpha;<sub>i</sub></span> directs
        itself, anchored on the fingers typing keys &mdash;
        <span class="var">&sigma;<sub>i</sub></span>, the doorway.
        <span class="var">c<sub>i</sub></span> rises across the
        threshold. From the new vantage,
        <span class="var">&Sscr;<sub>i</sub></span> is visible as
        what it is: corrupted, hijacked, themed by the wound. The
        pain has not gone anywhere. But
        <span class="var">i</span> is no longer <em>being</em> the
        pain. <em>Yeah, there it is.</em> The work, in real time.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">14.6</div>
      <p class="prop-body">
        <em>The standing place.</em> The real is not a goal. It is
        the configuration from which the next move is chosen
        rather than fired by <span class="var">&xi;<sub>i</sub></span>.
        Everything that follows in this document &mdash; the work
        of XVI, the recruit of XVII &mdash; assumes the standing
        place. Action taken from the imaginal is action driven by
        the wound, even when it looks productive on the surface.
        Action taken from the real is action that
        <span class="var">i</span> chose. The latter is the only
        kind that lasts in a way <span class="var">i</span> can
        live with.
      </p>
    </div>

    <p class="aside">
      A note on naming. <em>The real</em> is borrowed deliberately
      from common speech &mdash; <em>get real</em>, <em>the real
      thing</em>, <em>for real</em>. The everyday phrase already
      tracks the distinction we are formalizing: a state of contact
      with what is, as opposed to a state of being lost in
      something else. We mark the variable formally with
      <span class="var">c<sub>i</sub></span>, but the felt
      reference is what people have always meant by the word.
    </p>

    <p class="aside">
      The body version.
      <span class="var">c<sub>i</sub></span> is set in the body.
      Every channel that thins
      <span class="var">&Sscr;<sub>i</sub></span> or strengthens
      <span class="var">&alpha;<sub>i</sub></span> runs through
      tissue: sleep, breath, movement, regulated touch, time
      outdoors, sufficient nutrition, contact with regulated
      others, presence-based practice. There is no
      <span class="var">c<sub>i</sub></span>-raising operation
      that is not also a body operation. This is why every other
      section has had a body version, and why this one closes the
      arc: the real is where the body has been pointing all along.
    </p>
  </section>

  <section>
    <h2>XVI &middot; Work</h2>

    <div class="prop">
      <div class="prop-num">15.0</div>
      <p class="prop-body">
        Section XV closed by naming the real as the standing-place
        from which work happens. The natural next question:
        <em>what does <span class="var">i</span> do with
        <span class="var">&alpha;<sub>i</sub></span>?</em> Once the
        lever exists and the standing-place is reached, where does
        <span class="var">&alpha;<sub>i</sub></span> go? The answer
        articulated across this section is <em>work</em> &mdash;
        and the term wants a definition sharp enough to exclude
        most of what gets called work and include much that does
        not.
      </p>
    </div>

    <div class="def">
      <span class="def-label">Definition 19</span>
      Let <em>work</em> denote the sustained intentional deployment
      of <span class="var">&alpha;<sub>i</sub></span> that leaves
      lasting trace in <span class="var">w</span>.
      <em>Sustained</em> &mdash; not flickering.
      <em>Intentional</em> &mdash; not captured.
      <em>Lasting trace</em> &mdash; not consuming attention
      without consequence. What survives all three filters is what
      counts.
    </div>

    <div class="prop">
      <div class="prop-num">15.1</div>
      <p class="prop-body">
        <em>Two levels of work.</em> Definition 19 names
        <em>intentional</em> work &mdash; what
        <span class="var">&alpha;<sub>i</sub></span> deploys
        toward. But there is another work, always running
        underneath: the body&rsquo;s. Heart pumping. Kidneys
        filtering. Immune patrol. Cellular repair. Hormonal
        regulation. Memory consolidation overnight. Autonomic
        governance of every breath, every digestion, every wound
        healing. The body is the most prolific worker
        <span class="var">i</span> contains, and it does not stop.
      </p>
      $$\\alpha_i \\;=\\; 0 \\;\\;\\not\\Rightarrow\\;\\; \\text{work}_i \\;=\\; 0$$
      <p class="prop-body">
        There is no such thing as not working, while alive. Rest
        is not the <em>absence</em> of work but its
        <em>prioritization</em> &mdash; when
        <span class="var">&alpha;<sub>i</sub></span> subsides,
        body-work gets the system to itself. Sleep is the most
        demanding work the body does: tissue repair, memory
        consolidation, metabolic clearance, immune calibration,
        integration of the day&rsquo;s input. Lying still is not
        idleness; it is body-work proceeding under conditions where
        it can finally proceed.
      </p>
      <p class="prop-body">
        The implication for the houses below: <em>working any
        house well includes resting it well.</em> Corpus needs
        sleep more than it needs another cardio session. Opus
        needs the body&rsquo;s overnight consolidation more than
        tomorrow&rsquo;s extra hour at the keyboard. Animus
        depends on regulated sleep to complete the day&rsquo;s
        emotional integration. The autonomic body-work the houses
        depend on is what gets done <em>between</em> intentional
        sessions &mdash; and starving it collapses everything that
        runs on top of it.
      </p>
    </div>

    <div class="def">
      <span class="def-label">Definition 20</span>
      Let <span class="var">&Hscr;</span> denote the set of twelve
      houses of work.
      $$\\mathcal{H} \\;=\\; \\{\\,\\mathcal{H}_{\\mathrm{I}},\\; \\mathcal{H}_{\\mathrm{II}},\\; \\ldots,\\; \\mathcal{H}_{\\mathrm{XII}}\\,\\}$$
      The twelve, named:
      I.&nbsp;<strong>Corpus</strong> &middot;
      II.&nbsp;<strong>Animus</strong> &middot;
      III.&nbsp;<strong>Tempus</strong> &middot;
      IV.&nbsp;<strong>Domus</strong> &middot;
      V.&nbsp;<strong>Patrimonium</strong> &middot;
      VI.&nbsp;<strong>Opus</strong> &middot;
      VII.&nbsp;<strong>Ars</strong> &middot;
      VIII.&nbsp;<strong>Studium</strong> &middot;
      IX.&nbsp;<strong>Vinculum</strong> &middot;
      X.&nbsp;<strong>Polis</strong> &middot;
      XI.&nbsp;<strong>Naturum</strong> &middot;
      XII.&nbsp;<strong>Ludus</strong>.
    </div>

    <div class="prop">
      <div class="prop-num">15.2</div>
      <p class="prop-body">
        <em>The houses, with scope.</em>
      </p>
      <p class="prop-body">
        <strong>I &middot; Corpus.</strong> The body. Sleep,
        nutrition, movement (strength, cardio, mobility), recovery,
        hygiene, medical maintenance, sexual and hormonal health,
        substance management. <em>Failure mode:</em> substrate
        erosion that bleeds capacity from every other house.
      </p>
      <p class="prop-body">
        <strong>II &middot; Animus.</strong> The inner architecture.
        <span class="var">&xi;<sub>i</sub></span> metabolism;
        <span class="var">&alpha;<sub>i</sub></span> training;
        <span class="var">c<sub>i</sub></span> sustaining; emotional
        intelligence; self-knowledge; existential reckoning.
        <em>Failure mode:</em>
        <span class="var">&xi;<sub>i</sub></span> takeover &mdash;
        the loop of 12.7 runs unchecked.
      </p>
      <p class="prop-body">
        <strong>III &middot; Tempus.</strong> Time and rhythm. Daily
        cadence, weekly cycle, seasonal pulse, sabbath, retreat,
        observances. <em>Failure mode:</em> arrhythmia &mdash;
        activities may all be present but stripped of rhythm and so
        failing to compound.
      </p>
      <p class="prop-body">
        <strong>IV &middot; Domus.</strong> The dwelling. Cooking,
        cleaning, order, repair, plants, pets, aesthetic
        environment, the daily inhabitation of the home.
        <em>Failure mode:</em> the room becomes punishment instead
        of refuge.
      </p>
      <p class="prop-body">
        <strong>V &middot; Patrimonium.</strong> Provision. Income,
        savings, investment, debt, insurance, housing,
        transportation, tools, possessions. <em>Failure mode:</em>
        material precarity that captures
        <span class="var">&alpha;<sub>i</sub></span> with
        survival-anxiety.
      </p>
      <p class="prop-body">
        <strong>VI &middot; Opus.</strong> Vocation. The
        manifestation work fitted to <span class="var">i</span>&rsquo;s
        shape &mdash; where <span class="var">w</span> led
        <span class="var">i</span>. Skill development, tool mastery,
        professional community, reputation, mentorship.
        <em>Failure mode:</em> drift; the gift goes undeployed.
      </p>
      <p class="prop-body">
        <strong>VII &middot; Ars.</strong> Creative expression.
        Making whose value is in the making. Music, writing, craft,
        art, performance. Lineage and study of masters,
        collaboration, audience. <em>Failure mode:</em> the channel
        through which the body sings goes silent.
      </p>
      <p class="prop-body">
        <strong>VIII &middot; Studium.</strong> Learning. Reading,
        study, skill acquisition outside vocation, languages,
        conversation with sharper minds, knowledge of history and
        science and context. <em>Failure mode:</em> ossification;
        <span class="var">&wcirc;<sub>i</sub></span> stops updating.
      </p>
      <p class="prop-body">
        <strong>IX &middot; Vinculum.</strong> Bonds. Intimate
        partner; family of origin; chosen family; close friendships;
        wider friendships; neighbours; professional ties; mentor
        and mentee relationships; community. The work of
        attunement, repair, presence, reciprocity, vulnerability.
        <em>Failure mode:</em> isolation &mdash; the social fabric
        thins until <span class="var">i</span> is operating without
        co-regulation, where
        <span class="var">&xi;<sub>i</sub></span> compounds fastest.
      </p>
      <p class="prop-body">
        <strong>X &middot; Polis.</strong> The civic and
        collective. Political engagement, volunteering,
        environmental responsibility, contribution to public goods,
        awareness of the larger context
        <span class="var">i</span> is embedded in.
        <em>Failure mode:</em> civic atrophy;
        <span class="var">i</span> becomes a private resource pool
        drawing on a commons it does not replenish.
      </p>
      <p class="prop-body">
        <strong>XI &middot; Naturum.</strong> The wild. Nature,
        time outdoors, non-human life, cosmos, seasons, place,
        rootedness. <em>Failure mode:</em> the perceptual diet
        narrows to the human-made; awe and proportion fade;
        <span class="var">c<sub>i</sub></span> loses its cheapest
        pathway upward.
      </p>
      <p class="prop-body">
        <strong>XII &middot; Ludus.</strong> Play. Hobbies, games,
        travel, adventure, aesthetic consumption (art, film, music,
        literature for joy), humour, lightness, foolishness.
        <em>Failure mode:</em> grimness &mdash; every other house
        is worked at the cost of joy, and the work without joy is
        eventually abandoned.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">15.3</div>
      <p class="prop-body">
        <em>At any moment,
        <span class="var">&alpha;<sub>i</sub></span> is deployed to
        exactly one house.</em> The one-at-a-time constraint from
        XIV.
      </p>
      $$\\alpha_i(t) \\;\\in\\; \\mathcal{H}_k \\;\\;\\text{for some unique } k$$
      <p class="prop-body">
        Over a time window &mdash; a day, a week, a season, a life
        &mdash; <span class="var">i</span>&rsquo;s deployments
        form a distribution over the houses. We name this the
        <em>allocation profile</em>:
      </p>
      $$\\mu_i: \\mathcal{H} \\to [0, 1], \\quad \\sum_{k=\\mathrm{I}}^{\\mathrm{XII}} \\mu_i(\\mathcal{H}_k) \\;=\\; 1$$
      <p class="prop-body">
        The shape of a life is the shape of its
        <span class="var">&mu;<sub>i</sub></span>. Different
        <span class="var">i</span>&rsquo;s have radically different
        profiles; the same <span class="var">i</span> at different
        life stages has different profiles. The profile is the
        first place neglect shows: a house at near-zero allocation
        is a house in slow collapse.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">15.4</div>
      <p class="prop-body">
        <em>Each house has a maintenance threshold</em> &mdash; a
        floor below which the house begins to degrade.
      </p>
      $$\\mu_i(\\mathcal{H}_k) \\;\\geq\\; m_k$$
      <p class="prop-body">
        Sleep too little, the body breaks down. Skip relationship
        maintenance, the bonds wither. Stop tending the wound,
        <span class="var">&xi;<sub>i</sub></span> recompounds.
        Without the wild, <span class="var">c<sub>i</sub></span>
        sinks. Each
        <span class="var">m<sub>k</sub></span> is real and is
        non-zero; none of the houses is optional.
      </p>
      <p class="prop-body">
        The houses are <em>coupled</em>. Decay in one bleeds into
        the others: a broken body undermines vocation, depleted
        bonds hollow out creative work, sleep deprivation collapses
        attention. Below threshold in one house is, in time, below
        threshold in all of them. The damage is never local for
        long.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">15.5</div>
      <p class="prop-body">
        <em>The Hinkie stance.</em> Do not optimize any single
        house. Do not neglect any.
      </p>
      $$\\mu_i(\\mathcal{H}_k) \\;>\\; 0 \\quad \\forall\\, k$$
      <p class="prop-body">
        The strict positivity says: every house gets non-zero
        <span class="var">&alpha;<sub>i</sub></span>. Marginal
        compounding gains across twelve dimensions outperform
        heroic gains in one, because the latter typically come at
        the cost of another house&rsquo;s threshold, which collapses
        the whole. Process over outcome; distribution over peak;
        twelve fronts, not one.
      </p>
      <p class="prop-body">
        This is also an anti-<span class="var">&xi;<sub>i</sub></span>
        strategy. <a class="eq-ref" data-eq="wound-saturation"><span class="var">&xi;<sub>i</sub></span>
        wins by saturating <span class="var">&alpha;<sub>i</sub></span>
        through concentration on a small number of obsessions</a>.
        If
        <span class="var">&alpha;<sub>i</sub></span> is distributed
        across twelve surfaces,
        <span class="var">&xi;<sub>i</sub></span> has twelve fronts
        to defend against and cannot saturate them all. The
        diversification of effort is itself defence. Build the life
        the wound has to operate inside; let the life crowd it out.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">15.6</div>
      <p class="prop-body">
        <em>From the imaginal, from the real.</em> The same work
        &mdash; the same hour at the keyboard, the same
        conversation, the same set of weights &mdash; done from two
        different states is two categorically different things.
      </p>
      <p class="prop-body">
        <strong>From the imaginal.</strong>
        <span class="var">&xi;<sub>i</sub></span> drives. The hour
        at the keyboard is escape from anxiety. The conversation is
        performance. The weights are punishment of the body that
        failed. The work proceeds, sometimes successfully, but it
        accumulates without flourishing &mdash; because what is
        being served is the wound, not the life.
      </p>
      <p class="prop-body">
        <strong>From the real.</strong>
        <span class="var">&alpha;<sub>i</sub></span> has cleared
        <span class="var">&Sscr;<sub>i</sub></span>. The hour at the
        keyboard is craft. The conversation is contact. The weights
        are tending. The same surface activity in a register that
        is its own reward. This is what XV named
        <em>celebration</em>.
      </p>
      <p class="prop-body">
        The houses do not change. The register does.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">15.7</div>
      <p class="prop-body">
        <em>Flourishing.</em> Define
        <span class="var">F</span> as a function of
        <span class="var">i</span>&rsquo;s allocation profile.
      </p>
      $$F: \\mu_i \\;\\mapsto\\; \\mathbb{R}_{\\geq 0}$$
      <p class="prop-body">
        Two properties characterize <span class="var">F</span>.
      </p>
      <p class="prop-body">
        <strong>Threshold collapse.</strong>
      </p>
      $$\\exists\\, k : \\mu_i(\\mathcal{H}_k) < m_k \\;\\;\\Longrightarrow\\;\\; F(\\mu_i) \\to 0$$
      <p class="prop-body">
        No amount of investment in the other houses compensates for
        one house in collapse. Flourishing is not an average; it is
        closer to a product, and any single zero zeroes it out.
      </p>
      <p class="prop-body">
        <strong>Diminishing returns above threshold.</strong> Once
        <span class="var">&mu;<sub>i</sub></span>(<span class="var">&Hscr;<sub>k</sub></span>)
        is above <span class="var">m<sub>k</sub></span>, additional
        allocation to that house increases
        <span class="var">F</span> but with diminishing marginal
        returns. There is no house whose hypertrophy compensates
        for another house&rsquo;s neglect.
      </p>
      <p class="prop-body">
        Two consequences. First: <em>flourishing is bounded above
        by the weakest house.</em> Raising the floor matters more
        than raising the ceiling. Second: <em>the work is portfolio
        work, not specialist work.</em> The discipline is in
        keeping twelve plates spinning, not in lifting any one of
        them higher than necessary.
      </p>
    </div>

    <p class="aside">
      A note on naming. The Latin is not ornament. Each name is
      technically chosen: <em>Corpus</em> for the body as a unified
      thing; <em>Animus</em> for the active inner agent rather
      than <em>anima</em>, the more passive soul; <em>Tempus</em>
      rather than <em>Hora</em> because time is rhythm not hour;
      <em>Domus</em> for the inhabitable dwelling;
      <em>Patrimonium</em> for the estate that is held and passed
      on; <em>Opus</em> for the manifesting work that leaves a
      thing behind; <em>Ars</em> for the technical and the made
      beautiful; <em>Studium</em> for sustained study with desire
      in it; <em>Vinculum</em> for bond as something that
      <em>ties</em>; <em>Polis</em> for the political-as-collective
      in the pre-modern sense; <em>Naturum</em> for the non-human
      living; <em>Ludus</em> for play that is both game and school.
      Each name is doing technical work; together they make the
      surface on which work happens.
    </p>

    <p class="aside">
      The body version. Every house has a body component. Corpus
      is obvious. But Animus runs on neural metabolism; Tempus is
      enforced by circadian rhythm; Domus is the body&rsquo;s
      immediate spatial substrate; Patrimonium provides the
      resources the body needs; Opus exhausts the body and demands
      recovery; Ars finds the body&rsquo;s expressive channels;
      Studium depends on prefrontal capacity; Vinculum is mediated
      by vagal tone and touch; Polis demands stamina; Naturum
      re-regulates the autonomic baseline; Ludus discharges
      accumulated tension. The body is in every house and every
      house is in the body. Tend the body and every house gets
      easier to maintain.
    </p>
  </section>

  <section>
    <h2>XVII &middot; The instrument</h2>

    <div class="prop">
      <div class="prop-num">16.0</div>
      <p class="prop-body">
        XV gave the real. XVI gave work and the twelve houses.
        But work in any house &mdash; designing software,
        composing music, holding a hard conversation, tending the
        wound &mdash; requires more than
        <span class="var">&alpha;<sub>i</sub></span> pointing at
        the world. It requires
        <span class="var">&Sscr;<sub>i</sub></span> doing real
        internal work: planning, visualizing, modelling, reasoning,
        predicting consequences, holding structure. The simulation
        that has been described as the problem is also the most
        powerful instrument <span class="var">i</span> contains.
        The final move of the document is to <em>recruit</em> it.
      </p>
    </div>

    <div class="def">
      <span class="def-label">Definition 21</span>
      Let <em>the instrument</em> denote
      <span class="var">&Sscr;<sub>i</sub></span> in the relation
      where <span class="var">&alpha;<sub>i</sub></span> directs it
      from the real, in service of work. Not a new architectural
      component &mdash; the same
      <span class="var">&Sscr;<sub>i</sub></span> as in X and XI
      &mdash; in a categorically different relation to
      <span class="var">i</span>.
    </div>

    <div class="prop">
      <div class="prop-num">16.1</div>
      <p class="prop-body">
        <em>The flip.</em> The same machinery operates in two
        regimes, distinguished by which way the directional arrow
        between <span class="var">&alpha;<sub>i</sub></span> and
        <span class="var">&Sscr;<sub>i</sub></span> points.
      </p>
      <p class="prop-body">
        <strong>Master mode.</strong> The default.
      </p>
      $$\\mathcal{S}_i \\;\\longrightarrow\\; \\alpha_i$$
      <p class="prop-body">
        Simulation runs autonomously, content is
        <span class="var">&xi;<sub>i</sub></span>-tuned, attention
        is captured, <span class="var">i</span> inhabits the
        simulation as if it were <span class="var">w</span>.
      </p>
      <p class="prop-body">
        <strong>Instrument mode.</strong> The trained condition.
      </p>
      $$\\alpha_i \\;\\longrightarrow\\; \\mathcal{S}_i$$
      <p class="prop-body">
        Attention directs, simulation runs in service, content is
        chosen, <span class="var">i</span> wields the simulation
        as a tool. The arrow flips. That is what changes. The
        machinery is identical; the relation is opposite.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">16.2</div>
      <p class="prop-body">
        <em>Both branches recruited.</em> The two components of
        <span class="var">&Sscr;<sub>i</sub></span> named in XI
        &mdash; endogenous percepts
        <span class="var">&Pscr;<sub>i</sub></span> and abstract
        operations <span class="var">&Ascr;<sub>i</sub></span>
        &mdash; both become available as instruments.
      </p>
      <p class="prop-body">
        <span class="var">&Pscr;<sub>i</sub></span> <strong>recruited</strong>
        is deliberate visualization, rehearsal, mental imagery.
        Seeing a structure before building it. Hearing a phrase
        before playing it. Feeling a difficult conversation before
        having it. The same perceptual machinery
        <span class="var">&xi;<sub>i</sub></span> uses for
        rumination, redirected by
        <span class="var">&alpha;<sub>i</sub></span> toward
        chosen content.
      </p>
      <p class="prop-body">
        <span class="var">&Ascr;<sub>i</sub></span> <strong>recruited</strong>
        is deliberate reasoning, planning, derivation,
        model-building. Thinking through a problem. Planning a
        week. Deriving a structure. Composing a system. The same
        multiple-demand network whose metabolic cost was named in
        13.1, now spent on chosen ends rather than captured ones.
      </p>
      <p class="prop-body">
        Both serve. Both available. The same components that were
        running <span class="var">i</span> can now be running for
        <span class="var">i</span>.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">16.3</div>
      <p class="prop-body">
        <em>The condition.</em> Recruitment requires the real. The
        flipped arrow holds only above
        <span class="var">c<sub>i</sub></span>&rsquo;s threshold.
      </p>
      $$c_i \\;\\geq\\; c_i^{\\,*} \\;\\;\\Longrightarrow\\;\\; \\text{instrument mode available}$$
      <p class="prop-body">
        Below threshold, what looks like recruitment is
        <span class="var">&xi;<sub>i</sub></span>-driven activity
        wearing the clothes of work. The &ldquo;planning&rdquo; is
        catastrophizing. The &ldquo;visualization&rdquo; is
        worst-case rehearsal. The very thought <em>I am using my
        simulation as a tool</em> is, from inside capture, just
        more <span class="var">&Sscr;<sub>i</sub></span>-content
        generated by <span class="var">&Sscr;<sub>i</sub></span>.
      </p>
      <p class="prop-body">
        The way to know instrument mode is actually available, and
        not capture-pretending, is the signatures of 14.3:
        vividness, beauty in ordinary things, somatic well-being,
        the cool of not-pulled. Without those,
        <span class="var">c<sub>i</sub></span> is below threshold
        and the instrument is fiction. Tend the body, return to
        the doorway, raise <span class="var">c<sub>i</sub></span>,
        and then begin.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">16.4</div>
      <p class="prop-body">
        <em>Hijack and watchdog.</em> Even from the real, the
        instrument is contaminable.
        <span class="var">&xi;<sub>i</sub></span> can leak into a
        recruited <span class="var">&Sscr;<sub>i</sub></span>
        over time.
      </p>
      <p class="prop-body">
        The hijack is gradual. The &ldquo;planning&rdquo; slides
        into anxious catastrophizing. The
        &ldquo;visualization&rdquo; slides into worst-case
        rehearsal. The &ldquo;thinking through&rdquo; slides into
        rumination wearing the clothes of work. None of this
        announces itself; the instrument that was clean five
        minutes ago is now contaminated, and
        <span class="var">i</span> has not noticed, because
        <span class="var">&Sscr;<sub>i</sub></span> is
        continuously generating <em>this is just planning</em> as
        part of the simulation.
      </p>
      <p class="prop-body">
        <strong>The solution: periodic return to the doorway.</strong>
        While the instrument runs,
        <span class="var">&alpha;<sub>i</sub></span> stays partly
        tethered to <span class="var">&sigma;<sub>i</sub></span>
        &mdash; to the body, the breath, the surroundings.
      </p>
      $$\\alpha_i \\;\\to\\; \\sigma_i \\;\\;\\text{pulse} \\;\\;\\to\\;\\; \\alpha_i \\;\\to\\; \\mathcal{S}_i$$
      <p class="prop-body">
        Drift, return. Drift, return. The body-anchor is the
        watchdog: when the &ldquo;planning&rdquo; has slid into
        worry, the return reveals it. Raise
        <span class="var">c<sub>i</sub></span> again from the
        doorway; resume the instrument from a re-cleaned channel.
        The pulse is non-optional; an instrument run without it,
        for long enough, will be contaminated whether
        <span class="var">i</span> notices or not.
      </p>
      <p class="prop-body">
        The portfolio dispersion of 15.5 reinforces this. If one
        house&rsquo;s instrument has been hijacked &mdash; Opus
        slipping from designing into anxious self-evaluation, say
        &mdash; redirecting <span class="var">&alpha;<sub>i</sub></span>
        to another house breaks the chain before saturation
        consolidates. The twelve houses are also twelve fresh
        starts.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">16.5</div>
      <p class="prop-body">
        <em>The architecture, complete.</em> The arc the document
        has been building toward closes here.
      </p>
      <p class="prop-body">
        XIV: <span class="var">&alpha;<sub>i</sub></span> &mdash;
        the lever <span class="var">i</span> has.
      </p>
      <p class="prop-body">
        XV: the real &mdash; the standing-place from which the
        lever is wielded clean.
      </p>
      <p class="prop-body">
        XVI: work &mdash; what <span class="var">i</span> does
        from that standing-place, across the twelve houses, with
        the Hinkie discipline.
      </p>
      <p class="prop-body">
        XVII: the instrument &mdash;
        <span class="var">&Sscr;<sub>i</sub></span> recruited to
        serve the work, directed by
        <span class="var">&alpha;<sub>i</sub></span> from the
        real, watched by the doorway.
      </p>
      <p class="prop-body">
        Earlier sections named the architecture as it is:
        <span class="var">w</span>, <span class="var">i</span>,
        time, change, entropy, boundary, sensation, simulation,
        the contents of the simulation, the world within, the
        wound. The four foothold sections (XIV&ndash;XVII) name
        what <span class="var">i</span> can do with the
        architecture as it is. Together: a map of the territory and
        the moves available from inside it.
      </p>
      <p class="prop-body">
        The map does not make the work easy. It makes the work
        <em>intelligible</em>. <span class="var">i</span> still has
        to live this, every day, in the body
        <span class="var">i</span> has, in the
        <span class="var">w</span> that
        <span class="var">i</span> is in. The wound calcifies and
        grows by default (12.7); the counter-loop
        (14.4) is also available;
        <span class="var">&xi;<sub>i</sub></span> wins by saturation,
        the houses defeat saturation by dispersion; the body is the
        substrate every move runs on, and where every move fails
        first. None of this is news to a body that has been doing
        the work. What the document offers is the naming:
        intentional life as an architecture
        <span class="var">i</span> can see, and from seeing, act
        on.
      </p>
    </div>

    <p class="aside">
      The body version. The instrument runs on body capacity.
      Recruited <span class="var">&Sscr;<sub>i</sub></span> costs
      metabolic substrate &mdash; sustained prefrontal activity,
      glucose, regulated autonomic state, recovery. A depleted body
      cannot wield a clean instrument; the recruit becomes hijack
      faster, the doorway becomes harder to reach, the signatures
      of the real do not arrive. Sleep, nutrition, movement,
      autonomic regulation, contact with regulated others &mdash;
      the body version of every section now compounds. The
      complete architecture cannot be operated by a depleted body.
      The body is where the architecture is operated, and where it
      fails first.
    </p>

  </section>

  <section>
    <h2>XVIII &middot; Music</h2>

    <div class="prop">
      <div class="prop-num">17.0</div>
      <p class="prop-body">
        The instrument from XVII is for something. XVI named work;
        XVII named the simulation recruited to serve work. The
        natural last question: what is the work itself for?
      </p>
      <p class="prop-body">
        The answer is more specific than 15.7&rsquo;s placeholder
        of <em>flourishing</em>, and earlier than this section the
        full shape could not be named. The architecture is in
        service of the production of <em>music</em> &mdash; across
        the twelve houses, moment by moment, across years.
      </p>
    </div>

    <div class="def">
      <span class="def-label">Definition 22</span>
      Let <span class="var">&Mscr;<sub>i</sub></span> denote
      <em>music</em>: the phenomenon <span class="var">i</span>
      produces when configuration is right. The literal art form is
      one instance among many. Clarity on a work problem is another.
      A room with everything in its place is another. A conversation
      in which something emerges between people that wasn&rsquo;t
      there alone is another. The same texture, different materials.
    </div>

    <div class="prop">
      <div class="prop-num">17.1</div>
      <p class="prop-body">
        <em>The signatures.</em> Music is recognizable across the
        houses by a consistent felt-texture.
      </p>
      <p class="prop-body">
        <strong>Corpus.</strong> The breath is right, the posture
        is right, the gait is right. Movement without friction.
      </p>
      <p class="prop-body">
        <strong>Animus.</strong> The wound is met cleanly; the
        day&rsquo;s emotion integrates in sleep; you wake whole.
      </p>
      <p class="prop-body">
        <strong>Tempus.</strong> The day has rhythm; rest and work
        alternate in proportion; the week breathes.
      </p>
      <p class="prop-body">
        <strong>Domus.</strong> The apartment exhales. Every object
        is where it wants to be. Light falls correctly on the
        surfaces.
      </p>
      <p class="prop-body">
        <strong>Patrimonium.</strong> Enough. Resources flow
        without anxiety; nothing in the life is starving for lack.
      </p>
      <p class="prop-body">
        <strong>Opus.</strong> The problem suddenly has shape; the
        next move is obvious; forward motion in the chest.
      </p>
      <p class="prop-body">
        <strong>Ars.</strong> The right notes. The phrase that
        lands. The image that works. The made thing is more than
        the parts that went into it.
      </p>
      <p class="prop-body">
        <strong>Studium.</strong> The concept clicks. You can
        re-derive it from first principles. It stays.
      </p>
      <p class="prop-body">
        <strong>Vinculum.</strong> A conversation in which the
        other person feels met, you feel met, and something
        emerges between you that wasn&rsquo;t there alone.
      </p>
      <p class="prop-body">
        <strong>Polis.</strong> Contribution to the larger fabric
        without exhausting the self.
      </p>
      <p class="prop-body">
        <strong>Naturum.</strong> Time outdoors that re-regulates
        the body. The awe of altitude, the smell of pine, the
        indifferent ocean.
      </p>
      <p class="prop-body">
        <strong>Ludus.</strong> Laughter that surprises you. Play
        that returns you to lightness.
      </p>
      <p class="prop-body">
        Same phenomenon, twelve materials. The felt-texture is what
        <span class="var">i</span> recognizes as <em>music</em>.
      </p>
    </div>

    <div class="def">
      <span class="def-label">Definition 23</span>
      Let <span class="var">O<sub>k</sub></span> denote the
      <em>order</em> of the configuration in house
      <span class="var">&Hscr;<sub>k</sub></span>:
      $$O_k \\;=\\; 1 \\;-\\; \\frac{S_k}{S_k^{\\,\\max}} \\;\\in\\; [0, 1]$$
      The negentropy of <span class="var">&Hscr;<sub>k</sub></span>&rsquo;s
      configuration, normalized. <span class="var">S<sub>k</sub></span>
      is the entropy of the current arrangement (Section VII&rsquo;s
      count: microstates per macrostate);
      <span class="var">S<sub>k</sub><sup>max</sup></span> is the
      entropy of the maximally-disordered configuration in that
      domain. <span class="var">O<sub>k</sub></span> $= 0$ at full
      chaos; <span class="var">O<sub>k</sub></span> $\\to 1$
      asymptotically as the configuration is more and more
      specifically determined.
    </div>

    <div class="def">
      <span class="def-label">Definition 24</span>
      Let <span class="var">A<sub>k</sub></span> denote the
      <em>aliveness</em> of the configuration in house
      <span class="var">&Hscr;<sub>k</sub></span>:
      $$A_k \\;=\\; \\frac{\\bigl|\\,dS_k^{\\,\\text{ext}} / dt\\,\\bigr|}{A_k^{\\,\\max}} \\;\\in\\; [0, 1]$$
      The normalized rate at which entropy is being <em>exported</em>
      from <span class="var">&Hscr;<sub>k</sub></span> to the
      environment &mdash; how vigorously <span class="var">i</span>
      is pumping against the second law to maintain order in that
      house. Direct call-back to 6.6 (the body as entropy pump) and
      the local-decrease condition. For Prigogine&rsquo;s
      <em>dissipative structures</em> &mdash; whirlpools, flames,
      bodies, music being played &mdash;
      <span class="var">A<sub>k</sub></span> is positive and
      sustained. For frozen states (a perfect crystal, an immaculate
      empty apartment, a perfectly transcribed but unread score),
      <span class="var">A<sub>k</sub></span> $= 0$ regardless of how
      ordered the configuration is.
    </div>

    <div class="def">
      <span class="def-label">Definition 25</span>
      Let <span class="var">&kappa;<sub>k</sub></span> denote the
      <em>coherence</em> of house <span class="var">&Hscr;<sub>k</sub></span>:
      $$\\kappa_k \\;=\\; O_k \\cdot A_k$$
      Music in <span class="var">&Hscr;<sub>k</sub></span> requires
      both order and aliveness. The product structure makes this
      necessary-AND: if either goes to zero, coherence collapses.
    </div>

    <div class="prop">
      <div class="prop-num">17.2</div>
      <p class="prop-body">
        <em>Three regimes, made precise.</em>
      </p>
      <p class="prop-body">
        <strong>Chaos &mdash; <span class="var">O<sub>k</sub></span>
        low, <span class="var">A<sub>k</sub></span> any.</strong>
        Activity without order. The desk is busy but unproductive.
        Notes are loud but dissonant. The conversation is energetic
        but disconnecting. The body is activated but dysregulated.
        High pumping in a configuration that isn&rsquo;t holding any
        shape worth pumping.
      </p>
      <p class="prop-body">
        <strong>Frozen &mdash; <span class="var">O<sub>k</sub></span>
        high, <span class="var">A<sub>k</sub></span> $\\to 0$.</strong>
        Order without life. Apartment immaculate but empty. Score
        correct but mechanical. Sentence well-formed but unread. A
        perfect crystal at absolute zero. Beautiful, possibly &mdash;
        but dead, and producing nothing.
      </p>
      <p class="prop-body">
        <strong>Music &mdash; <span class="var">O<sub>k</sub></span>
        high <em>and</em> <span class="var">A<sub>k</sub></span>
        high.</strong> Order maintained by ongoing flux. The jazz
        quartet in flow. The right move at the right moment. The
        body moving skillfully, sustained. The configuration that
        resonates because it is being held by active work, not
        frozen by inertia.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">17.3</div>
      <p class="prop-body">
        <em>Total music.</em>
      </p>
      $$\\mathcal{M}_i \\;=\\; \\prod_{k=\\mathrm{I}}^{\\mathrm{XII}} \\kappa_k \\;=\\; \\left(\\prod_k O_k\\right) \\cdot \\left(\\prod_k A_k\\right)$$
      <p class="prop-body">
        Music in <span class="var">i</span>&rsquo;s life equals the
        product over the twelve houses of order and the product over
        the twelve houses of aliveness. Product, not sum, for the
        same reason flourishing in 15.7 was product-shaped: any one
        house in chaos or frozen state drags music down across all
        of them. <span class="var">i</span> cannot make music at the
        keyboard while the body is in collapse. Conversation does
        not produce music in a home in disarray. The coupling
        between houses (15.3) reasserts itself at the level of
        configuration quality, not just allocation.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">17.4</div>
      <p class="prop-body">
        <em>The entropy question, answered.</em> Is the objective
        function the reduction of entropy? Yes &mdash; and more.
      </p>
      <p class="prop-body">
        Music <em>is</em> local entropy reduction: the
        <span class="var">O</span>-side of
        <span class="var">&kappa;</span> is precisely $1 - S/S^{\\max}$,
        the negentropy of the local configuration. The wound
        calcifies and grows (12.3); the world disorders by default
        (4.2, 6.4). Against these,
        <span class="var">i</span> produces local order. The body
        is already doing this autonomically (6.6, the entropy pump);
        the houses, well-tended, do this at every other scale.
      </p>
      <p class="prop-body">
        But not all local entropy reduction is music. A perfect
        crystal at absolute zero is maximally ordered and produces
        nothing &mdash; it is frozen, not music. An immaculate
        empty apartment has high <span class="var">O</span> and
        zero <span class="var">A</span>. The wound contracted into
        rigidity has high <span class="var">O</span> at the cost of
        aliveness. Music adds the aliveness requirement &mdash;
        order <em>maintained by ongoing flux</em>, order that
        <em>resonates</em> rather than just sits. Necessary that
        entropy go down locally; not sufficient.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">17.5</div>
      <p class="prop-body">
        <em>The chain completes.</em> The whole architecture,
        viewed from this last vantage:
      </p>
      <p class="prop-body">
        XIV gives the lever. <span class="var">&alpha;<sub>i</sub></span>
        is the only degree of freedom <span class="var">i</span>
        has.
      </p>
      <p class="prop-body">
        XV gives the standing place. From the real,
        <span class="var">&alpha;<sub>i</sub></span> is wielded
        clean of <span class="var">&xi;<sub>i</sub></span>.
      </p>
      <p class="prop-body">
        XVI gives the work. From the standing place,
        <span class="var">&alpha;<sub>i</sub></span> is deployed
        across the twelve houses, by the Hinkie discipline.
      </p>
      <p class="prop-body">
        XVII gives the instrument.
        <span class="var">&Sscr;<sub>i</sub></span> recruited to
        serve the work, directed by
        <span class="var">&alpha;<sub>i</sub></span>, watched by
        the doorway.
      </p>
      <p class="prop-body">
        XVIII gives the reason. The instrument is for the
        production of music. That is what the work is for. That is
        what the houses serve. That is what
        <span class="var">i</span> is here to do.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">17.6</div>
      <p class="prop-body">
        <em>Music and flourishing.</em>
        <span class="var">F</span> (15.7) measured the
        <em>quantity</em> of attention allocation across the houses
        &mdash; how well-distributed the time and effort were.
        <span class="var">&Mscr;<sub>i</sub></span> measures the
        <em>quality</em> of configuration within each house
        &mdash; how coherently the activity in that house
        resonates. Both matter, and they multiply.
      </p>
      <p class="prop-body">
        A life can have well-allocated attention (high
        <span class="var">F</span>) but produce dead activity (low
        <span class="var">&Mscr;<sub>i</sub></span>): twelve houses
        tended dutifully but without music in any of them. A life
        can have intense music in one house (high
        <span class="var">&kappa;<sub>k</sub></span>) but neglect
        the others (low <span class="var">F</span>): the artist
        who creates beauty while their body breaks; the founder
        who builds but cannot love.
      </p>
      <p class="prop-body">
        The complete picture is high <span class="var">F</span>
        <em>and</em> high <span class="var">&Mscr;<sub>i</sub></span>:
        well-distributed attention producing music across all twelve
        houses. Allocation and configuration, both right.
      </p>
    </div>

    <div class="prop">
      <div class="prop-num">17.7</div>
      <p class="prop-body">
        <em>Why music.</em> Music is what life looks like when the
        architecture is operating well. Not survival &mdash; that
        is substrate. Not flourishing in the abstract &mdash; that
        is the macroscopic placeholder. Music is what happens at
        the microscopic level, moment by moment, when configuration
        is right.
      </p>
      <p class="prop-body">
        The wound calcifies by default (12.3). The houses go
        untended without discipline (15.4). The simulation captures
        attention (13.2). Against all that,
        <span class="var">i</span> produces music. Some moments,
        some hours, some seasons. Occasionally a life that
        accumulates more music than not.
      </p>
      <p class="prop-body">
        This is the answer to <em>what is the instrument for.</em>
        This is the reason the architecture exists. This is what
        the whole document has been building toward.
      </p>
    </div>

    <p class="aside">
      The body version. Music is bodily end to end. Aliveness
      <span class="var">A<sub>k</sub></span> is energetic substrate
      &mdash; the body&rsquo;s capacity to sustain entropy export
      depends on sleep, nutrition, autonomic regulation, all of
      Corpus. Order <span class="var">O<sub>k</sub></span> depends
      on cognitive clarity, which depends on the same autonomic
      state via the multiple-demand network (13.1). The felt
      signatures of music &mdash; the click in the chest, the
      breath that lands, the somatic warmth of a configuration that
      fits &mdash; are body events. There is no music separable
      from the body producing it. Tend the body and music becomes
      possible across every house; neglect it and music becomes
      impossible regardless of how hard
      <span class="var">i</span> tries elsewhere.
    </p>

    <p class="aside">
      The end. The document closes here. The architecture has been
      named: <span class="var">w</span>; <span class="var">i</span>;
      time, change, entropy, boundary, sensation, simulation, its
      contents, the world within, the wound; the lever, the real,
      work, the instrument, music. Eighteen sections, twenty-five
      definitions, more propositions than were planned, more
      footholds than were imagined at the start. None of it makes
      the work easy. All of it makes the work
      <em>intelligible</em>. The rest is what
      <span class="var">i</span> does with it, one day at a time,
      in the body that is, in the <span class="var">w</span> that
      is. Producing music is what <span class="var">i</span> is
      here to do. Now go and make it.
    </p>
  </section>

`;
