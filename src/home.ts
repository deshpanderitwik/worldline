export const homeHTML = `
  <h1 class="glyph">w</h1>
  <p class="subtitle">an ontology &mdash; v0.11</p>

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
        Then:
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

  <footer>
    To be continued. Each iteration carves <span class="var">w</span> a little
    finer.
  </footer>
`;
