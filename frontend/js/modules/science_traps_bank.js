window.JEE_TRAPS_BANK = [
  {
    "subj": "PHYSICS",
    "title": "Dielectric Insertion: Battery Connected vs. Disconnected",
    "trap": "Assuming stored energy U always increases by factor K when a dielectric slab is inserted.",
    "fix": "Battery CONNECTED => V is constant, so C -> K*C, Q -> K*Q, and U -> K*U. Battery DISCONNECTED => Q is constant, so V -> V/K, E -> E/K, and U -> U/K."
  },
  {
    "subj": "PHYSICS",
    "title": "Pure Rolling Static Friction Direction & Work",
    "trap": "Assuming static friction always opposes linear velocity and dissipates energy.",
    "fix": "In pure rolling (v_cm = omega*R), the contact point is instantaneously at rest so static friction does ZERO work. Without external torque, static friction points UP an incline (both rolling down and rolling up)."
  },
  {
    "subj": "PHYSICS",
    "title": "Series LCR Resonance Voltage Magnification",
    "trap": "Thinking individual V_L or V_C cannot exceed the applied AC source voltage V_rms.",
    "fix": "At resonance (X_L = X_C), V_L and V_C are 180 deg out of phase and cancel, so Z = R while V_L = V_C = Q * V_rms can exceed V_rms by Quality Factor Q."
  },
  {
    "subj": "PHYSICS",
    "title": "Photoelectric Stopping Potential vs. Intensity",
    "trap": "Assuming doubling light intensity doubles the stopping potential V_0.",
    "fix": "Stopping potential V_0 depends strictly on incident frequency (e*V_0 = h*nu - phi_0) and is completely independent of light intensity; intensity only scales saturation photocurrent."
  },
  {
    "subj": "PHYSICS",
    "title": "Adiabatic vs. Isothermal Bulk Modulus",
    "trap": "Using Bulk Modulus B = P for rapid sound waves in air.",
    "fix": "Isothermal bulk modulus B_iso = P, whereas adiabatic bulk modulus B_adia = gamma * P (used in Newton-Laplace sound speed v = sqrt(gamma*P/rho))."
  },
  {
    "subj": "PHYSICS",
    "title": "Circular Motion Centripetal Force in FBD",
    "trap": "Drawing centrifugal/centripetal force as an extra separate force in an inertial free-body diagram.",
    "fix": "Centripetal force (m*v^2/r) is NOT a new force—it is simply the net inward resultant of real forces (tension, normal, gravity, friction)."
  },
  {
    "subj": "PHYSICS",
    "title": "Terminal Velocity Radius Scaling in Stokes' Law",
    "trap": "Assuming terminal velocity v_T scales linearly with sphere radius r.",
    "fix": "Equating viscous drag 6*pi*eta*r*v_T to net buoyant weight (4/3)*pi*r^3*(rho - sigma)*g gives v_T proportional to r^2."
  },
  {
    "subj": "PHYSICS",
    "title": "Convex Lens Immersion in Higher-Index Liquid",
    "trap": "Assuming a convex glass lens (n = 1.5) always converges light regardless of surrounding liquid.",
    "fix": "In a liquid with n_med > 1.5 (e.g., CS2, n = 1.65), (n_lens/n_med - 1) turns negative, flipping a convex lens into a DIVERGING lens."
  },
  {
    "subj": "PHYSICS",
    "title": "YDSE Fringe Width vs. Central Shift with Thin Slab",
    "trap": "Thinking inserting a thin transparent sheet in front of one slit changes fringe spacing beta.",
    "fix": "Fringe width beta = lambda*D/d remains unchanged; only the entire pattern shifts laterally by Delta_y = (mu - 1)*t*D/d toward the covered slit."
  },
  {
    "subj": "PHYSICS",
    "title": "Work Done by Static vs. Kinetic Friction",
    "trap": "Believing static friction can never do work and kinetic friction always does negative work.",
    "fix": "Static friction does positive work on the top block in a two-block accelerating stack; kinetic friction can do positive work in a ground frame if a block is dropped onto a moving belt."
  },
  {
    "subj": "PHYSICS",
    "title": "Electric Potential vs. Electric Field Inside a Hollow Conductor",
    "trap": "Assuming electrostatic potential V = 0 inside a charged hollow metallic shell because E = 0.",
    "fix": "Inside a charged conductor E = 0, which implies dV/dr = 0 => V is CONSTANT and equals the surface potential k*Q/R (not zero)."
  },
  {
    "subj": "PHYSICS",
    "title": "Carnot Efficiency Temperature Unit Trap",
    "trap": "Plugging temperatures directly in degrees Celsius into eta = 1 - T2/T1.",
    "fix": "Always convert Celsius to absolute Kelvin (T_K = T_C + 273.15) before computing Carnot efficiency or COP."
  },
  {
    "subj": "PHYSICS",
    "title": "Doppler Effect Wind Velocity Correction",
    "trap": "Ignoring wind speed w blowing from source to observer.",
    "fix": "Wind shifts the effective speed of sound in the medium from v to (v + w) in both numerator and denominator of the Doppler formula."
  },
  {
    "subj": "PHYSICS",
    "title": "Induced Charge vs. Induced EMF Speed Dependence",
    "trap": "Thinking total charge Delta_q induced in a closed coil depends on how fast the magnet moves.",
    "fix": "Induced EMF e = -dPhi/dt depends on speed, but total induced charge Delta_q = Delta_Phi / R is completely independent of time taken."
  },
  {
    "subj": "PHYSICS",
    "title": "Gravitation Escape Speed Direction Independence",
    "trap": "Assuming escape velocity v_e = sqrt(2gR) requires vertical upward launch.",
    "fix": "Because energy is scalar, escape speed sqrt(2gR) is independent of launch angle (provided no atmospheric drag or Earth collision)."
  },
  {
    "subj": "PHYSICS",
    "title": "Zener Diode Breakdown Region Polarity",
    "trap": "Connecting a Zener voltage regulator in forward bias.",
    "fix": "A Zener diode is heavily doped to operate strictly in REVERSE breakdown (V_Z) as a voltage regulator; in forward bias it acts like an ordinary diode (~0.7 V)."
  },
  {
    "subj": "PHYSICS",
    "title": "de Broglie Wavelength of Accelerated Charged Particles",
    "trap": "Using lambda = h / sqrt(2*m*q*V) without accounting for charge q = 2e on an alpha particle.",
    "fix": "For proton vs. alpha particle accelerated through the same V, lambda_p / lambda_alpha = sqrt((m_alpha * q_alpha)/(m_p * q_p)) = sqrt(4 * 2) = 2*sqrt(2)."
  },
  {
    "subj": "PHYSICS",
    "title": "Biot-Savart vs. Ampere's Law on Finite Wire",
    "trap": "Applying B = mu_0*I / (2*pi*r) to a short finite current segment.",
    "fix": "Ampere's infinite-wire formula holds only for infinitely long wires; for a finite segment subtending angles theta_1, theta_2, use B = (mu_0*I / 4*pi*r)*(sin theta_1 + sin theta_2)."
  },
  {
    "subj": "PHYSICS",
    "title": "SHM Total Mechanical Energy Amplitude Scaling",
    "trap": "Assuming doubling SHM amplitude doubles total energy.",
    "fix": "Total mechanical energy E = 0.5 * m * omega^2 * A^2 scales with A^2 (quadruples when amplitude doubles)."
  },
  {
    "subj": "PHYSICS",
    "title": "Bernoulli's Theorem Viscous Fluid Limitation",
    "trap": "Applying ideal Bernoulli equation P + 0.5*rho*v^2 + rho*g*h = const to viscous flow through narrow capillaries.",
    "fix": "Bernoulli's equation assumes incompressible, non-viscous, irrotational streamline flow; viscous pipe flow obeys Poiseuille's law."
  },
  {
    "subj": "CHEMISTRY",
    "title": "10^(-8) M Strong Acid pH Calculation",
    "trap": "Writing pH = -log10(10^-8) = 8.00 for a dilute HCl solution.",
    "fix": "An acidic aqueous solution at 298 K can NEVER have pH >= 7. Include water auto-ionization: [H+] = 10^-8 + 10^-7 = 1.1e-7 M => pH = 6.96."
  },
  {
    "subj": "CHEMISTRY",
    "title": "Halogens in Electrophilic Aromatic Substitution",
    "trap": "Assuming ring-deactivating groups always direct incoming electrophiles to the meta position.",
    "fix": "Halogens (-F, -Cl, -Br, -I) deactivate the benzene ring via strong -I inductive withdrawal, yet direct ORTHO/PARA via +M lone-pair resonance."
  },
  {
    "subj": "CHEMISTRY",
    "title": "Solids & Liquids in Kp = Kc*(RT)^(Delta n_g)",
    "trap": "Counting moles of CaCO3(s) or H2O(l) when calculating gaseous mole change Delta n_g.",
    "fix": "Count STRICTLY gaseous reactants and products in Delta n_g, and always convert temperature T to Kelvin."
  },
  {
    "subj": "CHEMISTRY",
    "title": "Kharash Peroxide Anti-Markovnikov Scope",
    "trap": "Applying anti-Markovnikov peroxide addition to HCl or HI.",
    "fix": "Kharash free-radical peroxide addition occurs EXCLUSIVELY with HBr; HCl and HI follow standard Markovnikov addition even with peroxides."
  },
  {
    "subj": "CHEMISTRY",
    "title": "Aqueous Basicity Order of Ethylamines",
    "trap": "Assuming tertiary amine (C2H5)3N is more basic than secondary (C2H5)2NH in water.",
    "fix": "In aqueous phase, solvation + inductive balance gives (C2H5)2NH (2 deg) > (C2H5)3N (3 deg) > C2H5NH2 (1 deg) > NH3 (whereas for methylamines it is 2 > 1 > 3 > NH3)."
  },
  {
    "subj": "CHEMISTRY",
    "title": "Gabriel Phthalimide Synthesis of Aniline",
    "trap": "Using Gabriel phthalimide synthesis to prepare aromatic primary amines like aniline.",
    "fix": "Gabriel synthesis works ONLY for aliphatic primary amines because aryl halides do not undergo SN2 nucleophilic substitution."
  },
  {
    "subj": "CHEMISTRY",
    "title": "Nernst Equation Intensive vs. Extensive E^0_cell",
    "trap": "Multiplying standard reduction potential E^0 by stoichiometric coefficient n when balancing half-reactions.",
    "fix": "Standard electrode potential E^0 is an INTENSIVE property and is NEVER multiplied when doubling a half-reaction (only Delta G^0 = -n*F*E^0 scales)."
  },
  {
    "subj": "CHEMISTRY",
    "title": "Isothermal Free Expansion of Ideal Gas",
    "trap": "Assuming Delta S = 0 for an adiabatic free expansion into vacuum because q = 0.",
    "fix": "Entropy S is a state function: for free expansion (V1 -> V2, T constant), q_irrev = 0, but Delta S_sys = n*R*ln(V2/V1) > 0."
  },
  {
    "subj": "CHEMISTRY",
    "title": "O-Nitrophenol vs. P-Nitrophenol Steam Volatility",
    "trap": "Assuming o-nitrophenol has a higher boiling point than p-nitrophenol.",
    "fix": "o-Nitrophenol forms INTRAMOLECULAR H-bonding (chelation), making it steam-volatile with a lower boiling point than intermolecularly H-bonded p-nitrophenol."
  },
  {
    "subj": "CHEMISTRY",
    "title": "Anomalous Electronic Configuration of Cr (24) & Cu (29)",
    "trap": "Writing [Ar] 3d4 4s2 for Cr or [Ar] 3d9 4s2 for Cu.",
    "fix": "Exchange energy and symmetry stabilize half-filled/fully-filled subshells: Cr = [Ar] 3d5 4s1 and Cu = [Ar] 3d10 4s1."
  },
  {
    "subj": "CHEMISTRY",
    "title": "Square Planar vs. Tetrahedral d8 Nickel Complexes",
    "trap": "Assuming both [NiCl4]2- and [Ni(CN)4]2- have the same geometry and magnetic moment.",
    "fix": "[NiCl4]2- (weak Cl-) is tetrahedral sp3 with 2 unpaired electrons (2.83 BM); [Ni(CN)4]2- (strong CN-) is square planar dsp2 and diamagnetic (0 BM)."
  },
  {
    "subj": "CHEMISTRY",
    "title": "Aldol vs. Cannizzaro Alpha-Hydrogen Test",
    "trap": "Applying Aldol condensation to benzaldehyde (C6H5CHO) or formaldehyde (HCHO).",
    "fix": "Aldehydes lacking alpha-H (HCHO, PhCHO, R3C-CHO) undergo Cannizzaro disproportionation in 50% NaOH, never Aldol."
  },
  {
    "subj": "CHEMISTRY",
    "title": "Friedel-Crafts Alkylation Carbocation Rearrangement",
    "trap": "Expecting n-propylbenzene as major product from benzene + 1-chloropropane + AlCl3.",
    "fix": "Primary n-propyl carbocation rearranges via 1,2-hydride shift to secondary isopropyl carbocation, giving cumene (isopropylbenzene) as major product."
  },
  {
    "subj": "CHEMISTRY",
    "title": "First-Order Half-Life Concentration Independence",
    "trap": "Halving t_1/2 when initial reactant concentration is halved in a first-order reaction.",
    "fix": "For first-order kinetics, t_1/2 = 0.693 / k is completely independent of initial concentration [R]_0."
  },
  {
    "subj": "CHEMISTRY",
    "title": "Lucas Test Reactivity Order of Alcohols",
    "trap": "Assuming 1-degree alcohols react fastest with Lucas reagent (conc. HCl + ZnCl2).",
    "fix": "Lucas reaction proceeds via SN1 carbocation stability: 3-degree (immediate turbidity) > 2-degree (5 mins) > 1-degree (no turbidity at room temp)."
  },
  {
    "subj": "CHEMISTRY",
    "title": "B2 and C2 Molecular Orbital Diamagnetism",
    "trap": "Using VB theory to predict C2 is paramagnetic or B2 is diamagnetic.",
    "fix": "MOT places pi_2px = pi_2py below sigma_2pz for <=14 electrons: B2 (10 e-) has 2 unpaired electrons (paramagnetic), while C2 (12 e-) has all paired electrons (diamagnetic, 2 pi bonds)."
  },
  {
    "subj": "CHEMISTRY",
    "title": "Inert Pair Effect in Group 13 & 14 Heavy Elements",
    "trap": "Assuming Tl3+ or Pb4+ is more stable than Tl+ or Pb2+.",
    "fix": "Poor shielding by d/f orbitals stabilizes the lower oxidation state down the group: Tl+ > Tl3+ and Pb2+ > Pb4+ (making PbO2 a strong oxidizer)."
  },
  {
    "subj": "CHEMISTRY",
    "title": "Reimer-Tiemann Electrophile Identity",
    "trap": "Thinking CCl3(-) or Cl+ is the attacking electrophile in Reimer-Tiemann formylation of phenol.",
    "fix": "The true reactive electrophile is neutral singlet dichlorocarbene (:CCl2), yielding salicylaldehyde (ortho major)."
  },
  {
    "subj": "CHEMISTRY",
    "title": "Hoffmann Bromamide Degradation Carbon Loss",
    "trap": "Keeping the same carbon chain length when converting an amide to an amine via Br2 + KOH.",
    "fix": "Hoffmann bromamide reaction yields a primary amine with ONE CARBON LESS than the starting amide."
  },
  {
    "subj": "CHEMISTRY",
    "title": "Zero-Order Rate Constant Units",
    "trap": "Using s^(-1) as units for a zero-order rate constant.",
    "fix": "For order n, rate constant k has units (mol L^-1)^(1-n) s^-1: mol L^-1 s^-1 for zero order, s^-1 for first order, L mol^-1 s^-1 for second order."
  },
  {
    "subj": "MATHEMATICS",
    "title": "Adjoint & Scalar Determinant Scaling |adj A| & |kA|",
    "trap": "Writing |k*A| = k*|A| or |adj A| = |A| for an n x n square matrix.",
    "fix": "For order n: |k*A| = k^n * |A|, |adj A| = |A|^(n-1), and |adj(adj A)| = |A|^((n-1)^2)."
  },
  {
    "subj": "MATHEMATICS",
    "title": "Definite Integral vs. Geometric Area",
    "trap": "Evaluating integral_0^(2pi) sin(x) dx = 0 and reporting geometric area as 0.",
    "fix": "Geometric area requires integrating |f(x)|: integral_0^pi sin(x) dx + |integral_pi^(2pi) sin(x) dx| = 2 + 2 = 4."
  },
  {
    "subj": "MATHEMATICS",
    "title": "AM >= GM Positivity Domain Requirement",
    "trap": "Applying AM >= GM directly to x + 1/x without verifying x > 0.",
    "fix": "AM >= GM holds strictly for positive real numbers (x > 0 => min = 2). For x < 0, x + 1/x <= -2 (maximum is -2)."
  },
  {
    "subj": "MATHEMATICS",
    "title": "Inverse Trig Principal Value Range (arccos / arcsin)",
    "trap": "Simplifying arccos(cos(7*pi/6)) directly to 7*pi/6.",
    "fix": "Principal range of arccos is [0, pi]: arccos(cos(7*pi/6)) = arccos(cos(2*pi - 5*pi/6)) = 5*pi/6."
  },
  {
    "subj": "MATHEMATICS",
    "title": "Differentiability of |x - a| at Corner Points",
    "trap": "Assuming continuity of f(x) = |x - 2| at x = 2 implies differentiability.",
    "fix": "LHD = -1 != RHD = +1 at x = 2; |x - a| is continuous everywhere but non-differentiable at x = a."
  },
  {
    "subj": "MATHEMATICS",
    "title": "Logarithmic Equation Domain Loss",
    "trap": "Solving log(x - 1) + log(x - 2) = log(2) -> (x-1)(x-2)=2 -> x = 0, 3 and keeping x = 0.",
    "fix": "Check original argument positivity (x > 2): x = 0 makes log arguments negative and must be rejected; only x = 3 is valid."
  },
  {
    "subj": "MATHEMATICS",
    "title": "Matrix Multiplication Non-Commutativity in (A + B)^2",
    "trap": "Expanding (A + B)^2 as A^2 + 2AB + B^2 for general square matrices.",
    "fix": "(A + B)^2 = A^2 + AB + BA + B^2; it equals A^2 + 2AB + B^2 if and only if AB = BA."
  },
  {
    "subj": "MATHEMATICS",
    "title": "Division by Zero in Trigonometric Equations",
    "trap": "Canceling sin(x) from both sides of sin(x)*cos(x) = sin(x) without recording sin(x) = 0.",
    "fix": "Factor instead of dividing: sin(x)*(cos(x) - 1) = 0 => sin(x) = 0 (x = n*pi) OR cos(x) = 1."
  },
  {
    "subj": "MATHEMATICS",
    "title": "Shortest Distance Between Parallel vs. Skew Lines",
    "trap": "Using |(a2 - a1) . (b1 x b2)| / |b1 x b2| when direction vectors b1 and b2 are parallel.",
    "fix": "When b1 x b2 = 0 (parallel lines), use d = |(a2 - a1) x b| / |b|."
  },
  {
    "subj": "MATHEMATICS",
    "title": "Greatest Integer Function [x] + [-x] Identity",
    "trap": "Assuming [x] + [-x] = 0 for all real x.",
    "fix": "[x] + [-x] = 0 ONLY when x is an integer; for any non-integer x, [x] + [-x] = -1."
  },
  {
    "subj": "MATHEMATICS",
    "title": "Local Extremum vs. Inflection Point (f'(c) = 0)",
    "trap": "Concluding f(x) = x^3 has a local extremum at x = 0 because f'(0) = 0.",
    "fix": "f'(c) = 0 is necessary, not sufficient: f'(x) = 3x^2 does not change sign around x = 0, making (0, 0) a point of inflection."
  },
  {
    "subj": "MATHEMATICS",
    "title": "L'Hopital's Rule Non-Indeterminate Trap",
    "trap": "Differentiating numerator and denominator when the limit is NOT 0/0 or inf/inf.",
    "fix": "Always verify 0/0 or inf/inf form before every single application of L'Hopital's rule."
  },
  {
    "subj": "MATHEMATICS",
    "title": "Skew-Symmetric Matrix Odd-Order Determinant",
    "trap": "Expanding a 3 x 3 or 5 x 5 skew-symmetric determinant manually.",
    "fix": "det(A) = det(A^T) = det(-A) = (-1)^n * det(A) => for every odd order n, det(A) = 0 identically."
  },
  {
    "subj": "MATHEMATICS",
    "title": "Parabola y^2 = 4ax vs. x^2 = 4ay Tangent Formula",
    "trap": "Using y = mx + a/m as tangent to x^2 = 4ay.",
    "fix": "For y^2 = 4ax, tangent is y = mx + a/m; for x^2 = 4ay, tangent is y = mx - a*m^2."
  },
  {
    "subj": "MATHEMATICS",
    "title": "Variance Scaling Under Constant Shift & Multiplication",
    "trap": "Adding constant c to variance when every observation x_i -> a*x_i + c.",
    "fix": "Shifting by +c does NOT change variance: Var(aX + c) = a^2 * Var(X) and SD(aX + c) = |a| * SD(X)."
  },
  {
    "subj": "MATHEMATICS",
    "title": "Complex Number Argument Quadrant Trap",
    "trap": "Computing arg(-1 - i) as arctan(-1/-1) = pi/4.",
    "fix": "(-1 - i) lies in Quadrant III => principal argument is -3*pi/4 (not pi/4)."
  },
  {
    "subj": "MATHEMATICS",
    "title": "Newton-Leibniz Differentiation with Variable Lower Limit",
    "trap": "Forgetting the minus sign when differentiating integral_{g(x)}^{h(x)} f(t) dt.",
    "fix": "d/dx integral_{g(x)}^{h(x)} f(t) dt = f(h(x))*h'(x) - f(g(x))*g'(x)."
  },
  {
    "subj": "MATHEMATICS",
    "title": "Bayes' Theorem vs. Conditional Probability Direction",
    "trap": "Confusing P(A | B) with P(B | A) in diagnostic/urn probability problems.",
    "fix": "P(A_i | E) = P(A_i)*P(E | A_i) / sum_j P(A_j)*P(E | A_j)."
  },
  {
    "subj": "MATHEMATICS",
    "title": "Binomial Expansion Middle Term Parity (Even vs. Odd n)",
    "trap": "Assuming (x + y)^n always has a single middle term.",
    "fix": "If n is even, there is 1 middle term T_{(n/2)+1}; if n is odd, there are 2 middle terms T_{(n+1)/2} and T_{(n+3)/2}."
  },
  {
    "subj": "MATHEMATICS",
    "title": "First-Order Linear Differential Equation Standard Form",
    "trap": "Applying IF = e^(integral P dx) before dividing through by the coefficient of dy/dx.",
    "fix": "Always normalize to dy/dx + P(x)*y = Q(x) with leading coefficient 1 before computing Integrating Factor."
  }
];
