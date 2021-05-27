var documenterSearchIndex = {"docs":
[{"location":"APIs/#Public-Interface","page":"APIs","title":"Public Interface","text":"","category":"section"},{"location":"APIs/","page":"APIs","title":"APIs","text":"Modules = [GeoGreensFunctions]\nPages = [\n  \"disl_dc3d.jl\",\n  \"disl_rect.jl\",\n  \"disl_seg2.jl\",\n  \"disl_tri3.jl\",\n  \"vol_hex8.jl\",\n  \"vol_tet4.jl\",\n  \"vol_rect.jl\",\n  \"vol_tri3.jl\",\n]\nPrivate = false\nOrder = [:type, :function, :constant, :macro]","category":"page"},{"location":"APIs/#GeoGreensFunctions.dc3d-Union{Tuple{A}, Tuple{T}, Tuple{T,T,T,T,T,T,A,A,AbstractArray{var\"#s26\",1} where var\"#s26\"<:Real}} where A<:(Union{AbstractArray{var\"#s25\",1}, AbstractArray{var\"#s25\",2}} where var\"#s25\"<:Real) where T<:Real","page":"APIs","title":"GeoGreensFunctions.dc3d","text":"dc3d(x::T, y::T, z::T, α::T, dep::T, dip::T,\n    al::Union{A, SubArray}, aw::Union{A, SubArray}, disl::A\n    ) where {T <: Number, A <: AbstractVecOrMat{T}}\n\nCalculate displacements and gradient of displacements due to a rectangular dislocation     in an elastic isotropic halfspace.\n\nPlease see dc3d for details.     Also this fault coordinate system is widely used in this package.\n\nArguments\n\nx, y, z: observational position, where z  0\nα: elastic constant\ndep: depth of fault origin\ndip: dip angle in degree\nal: a vector of 2 numbers, indicating along strike (x-axis) spanning\naw: a vector of 2 numbers, indicating along downdip (y-z plane) spanning\ndisl: a vector of 3 numbers, indicating dislocation in along-strike,   along-downdip and tensile respectively.\n\nOutput\n\nA vector of 12 numbers, each is u_x, u_y, u_z, u_xx,     u_yx, u_zx, u_xy, u_yy, u_zy, u_xz     u_yz, u_zz.\n\n\n\n\n\n","category":"method"},{"location":"APIs/#GeoGreensFunctions.disp_tri3_fs-Union{Tuple{V}, Tuple{T}, Tuple{T,T,T,V,V,V,T,T,T,T}} where V where T","page":"APIs","title":"GeoGreensFunctions.disp_tri3_fs","text":"disp_tri3_fs(X::T, Y::T, Z::T, P1::V, P2::V, P3::V, Ss::T, Ds::T, Ts::T, nu::T) where {T, V}\n\nCompute displacement risen from triangular dislocation in elastic fullspace.     Please see original version (in supporting information)     for details, especially the coordinate system used here.\n\nArguments\n\nThe same as disp_tri3_hs\n\n\n\n\n\n","category":"method"},{"location":"APIs/#GeoGreensFunctions.disp_tri3_hs-Union{Tuple{V}, Tuple{T}, Tuple{T,T,T,V,V,V,T,T,T,T}} where V where T","page":"APIs","title":"GeoGreensFunctions.disp_tri3_hs","text":"disp_tri3_hs(X::T, Y::T, Z::T, P1::V, P2::V, P3::V, Ss::T, Ds::T, Ts::T, nu::T) where {T, V}\n\nCompute displacement risen from triangular dislocation in elastic halfspace.     Please see original version (in supporting information)     for details, especially the coordinate system used here.\n\nArguments\n\nX, Y, Z: observational coordinates\nP1, P2, P3: three triangular vertices coordinates respectively\nSs, Ds, Ts: triangular dislocation vector, Strike-slip, Dip-slip, Tensile-slip respectively\nnu: poisson ratio\n\nOutput\n\nBy order: u_x, u_y, u_z\n\n\n\n\n\n","category":"method"},{"location":"APIs/#GeoGreensFunctions.stress_tri3_fs-Union{Tuple{V}, Tuple{T}, Tuple{T,T,T,V,V,V,T,T,T,T,T}} where V where T","page":"APIs","title":"GeoGreensFunctions.stress_tri3_fs","text":"stress_tri3_fs(X::T, Y::T, Z::T, P1::V, P2::V, P3::V, Ss::T, Ds::T, Ts::T, λ::T, μ::T) where {T, V}\n\nCompute stress risen from triangular dislocation in elastic fullspace.     Please see original version (in supporting information)     for details, especially the coordinate system used here.\n\nArguments\n\nThe same as stress_tri3_hs\n\n\n\n\n\n","category":"method"},{"location":"APIs/#GeoGreensFunctions.stress_tri3_hs-Union{Tuple{V}, Tuple{T}, Tuple{T,T,T,V,V,V,T,T,T,T,T}} where V where T","page":"APIs","title":"GeoGreensFunctions.stress_tri3_hs","text":"stress_tri3_hs(X::T, Y::T, Z::T, P1::V, P2::V, P3::V, Ss::T, Ds::T, Ts::T, λ::T, μ::T) where {T, V}\n\nCompute stress risen from triangular dislocation in elastic halfspace.     Please see original version (in supporting information)     for details, especially the coordinate system used here.\n\nArguments\n\nX, Y, Z: observational coordinates\nP1, P2, P3: three triangular vertices coordinates respectively\nSs, Ds, Ts: triangular dislocation vector, Strike-slip, Dip-slip, Tensile-slip respectively\nλ: Lamé's first parameter\nμ: shear modulus\n\nOutput\n\nBy order: σ_xx, σ_yy, σ_zz,     σ_xy, σ_xz, σ_yz.\n\n\n\n\n\n","category":"method"},{"location":"APIs/#GeoGreensFunctions._disp_vol_hex8-Union{Tuple{R}, NTuple{18,R}} where R","page":"APIs","title":"GeoGreensFunctions._disp_vol_hex8","text":"_disp_vol_hex8(\n    x1::R, x2::R, x3::R, q1::R, q2::R, q3::R,\n    L::R, T::R, W::R, theta::R,\n    epsv11p::R, epsv12p::R, epsv13p::R, epsv22p::R, epsv23p::R, epsv33p::R,\n    G::R, nu::R,\n    ) where R\n\nCompute displacement arisen from inelastic strain in Hex8 elements.     Please see original version     for complete details, especially the coordinate system used here.\n\nArguments\n\nx1, x2, x3: observational position, where x_3  0\nq1, q2, q3: Hex8 element position, where q_3  0\nL, T, W: Hex8 element length, thickness and width\ntheta: strike angle\nepsv**: strain components, each is ϵ_11, ϵ_12, ϵ_13,   ϵ_22, ϵ_23, ϵ_33\nG: shear modulus\nnu: poisson ratio\n\nOutput\n\nA vector of 3 numbers, each represents u_1, u_2, u_3\n\nNotice\n\nInplace version: _disp_vol_hex8!(u, args...) where u is a vector of 3 numbers.\n\n\n\n\n\n","category":"method"},{"location":"APIs/#GeoGreensFunctions._stress_vol_hex8-Union{Tuple{R}, NTuple{18,R}} where R","page":"APIs","title":"GeoGreensFunctions._stress_vol_hex8","text":"_stress_vol_hex8(\n    x1::R, x2::R, x3::R, q1::R, q2::R, q3::R,\n    L::R, T::R, W::R, theta::R,\n    epsv11p::R, epsv12p::R, epsv13p::R, epsv22p::R, epsv23p::R, epsv33p::R,\n    G::R, nu::R,\n    ) where R\n\nCompute stress arisen from inelastic strain in Hex8 elements.     Please see original version     for complete details, especially the coordinate system used here.\n\nArguments\n\nThe same as _disp_vol_hex8\n\nOutput\n\nA vector of 6 numbers, each represents σ_11, σ_12, σ_13,     σ_22, σ_23, σ_33\n\nNotice\n\nInplace version: _stress_vol_hex8!(u, args...) where u is a vector of 6 numbers.\n\n\n\n\n\n","category":"method"},{"location":"APIs/#GeoGreensFunctions._disp_vol_tet4-Union{Tuple{Q}, Tuple{U}, Tuple{R}, Tuple{Q,R,R,R,U,U,U,U,R,R,R,R,R,R,R}} where Q where U where R","page":"APIs","title":"GeoGreensFunctions._disp_vol_tet4","text":"_disp_vol_tet4(quadrature::Q,\n    x1::R, x2::R, x3::R, A::U, B::U, C::U, D::U,\n    e11::R, e12::R, e13::R, e22::R, e23::R, e33::R, nu::R\n    ) where {R, U, Q}\n\nCompute displacement arisen from inelastic strain in Tet4 elements.     Please see original version     for complete details, especially the coordinate system used here.\n\nArguments\n\nquadrature: quadrature rule for integration, see   FastGaussQuadrature.jl\nx1, x2, x3: observational position, where x_3  0\nA, B, C, D: a list of 3 numbers for each, each of which represents   coordinates of the vertex. All depth coordinates must be greater or   equal to 0 (no checking is performed here)\ne**: strain components, each is ϵ_11, ϵ_12, ϵ_13,   ϵ_22, ϵ_23, ϵ_33\nnu: poisson ratio\n\nOutput\n\nA vector of 3 numbers, each represents u_1, u_2, u_3\n\nNotice\n\nInplace version: _disp_vol_tet4!(u, args...) where u is a vector of 3 numbers.\n\n\n\n\n\n","category":"method"},{"location":"APIs/#GeoGreensFunctions._stress_vol_tet4-Union{Tuple{Q}, Tuple{U}, Tuple{R}, Tuple{Q,R,R,R,U,U,U,U,R,R,R,R,R,R,R,R}} where Q where U where R","page":"APIs","title":"GeoGreensFunctions._stress_vol_tet4","text":"_stress_vol_tet4(quadrature::Q,\n    x1::R, x2::R, x3::R, A::U, B::U, C::U, D::U,\n    e11::R, e12::R, e13::R, e22::R, e23::R, e33::R, G::R, nu::R\n    ) where {R, U, Q}\n\nCompute stress arisen from inelastic strain in Tet4 elements.     Please see original version     for complete details, especially the coordinate system used here.\n\nArguments\n\nquadrature: quadrature rule for integration, see   FastGaussQuadrature.jl\nx1, x2, x3: observational position\nA, B, C, D: a list of 3 numbers for each, each of which represents   coordinates of the vertex\ne**: strain components, each is ϵ_11, ϵ_12, ϵ_13,   ϵ_22, ϵ_23, ϵ_33\nG: shear modulus\nnu: poisson ratio\n\nOutput\n\nA vector of 6 numbers, each represents σ_11, σ_12, σ_13,     σ_22, σ_23, σ_33\n\nNotice\n\nInplace version: _stress_vol_tet4!(u, args...) where u is a vector of 6 numbers.\n\n\n\n\n\n","category":"method"},{"location":"#Introduction","page":"Introduction","title":"Introduction","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"This package provides commonly used Green's functions for geoscience research.","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"All functions are translated from their respective original sources, pertaining all original parameter names and coordinate system. A transform to the ENU (x -> east, y -> north, z -> upward) coordinate is provided if necessary. All methods here are type stable.","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"While trying my best to test against the original implementations and cross validate among them, this by no means guarantees them to be error-free. Due to the complexities in the equations, it is currently difficult to refactor the code myself for better clarity and performance.","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"Some of them hasn't been implemented yet.","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"If you encounter any problem, please don't hesitate file an issue with your minimum working example(s). If you think something can be improved, PR is always appreciated!","category":"page"},{"location":"#Known-Issues","page":"Introduction","title":"Known Issues","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"issue 15276 for type stability involving nested function\nsegment dislocation sometimes does not match dc3d, which is reflected by some random tests\nbroadcast is mostly not enabled, which significantly increases the compile time\nlots of repeated formula which can be refactored to simplify generated codes","category":"page"}]
}