const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand ps-4" href="#"><span className=" badge bg-light text-dark fs-4">NewsMag</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item pe-3 ps-5">
          <a className="nav-link active" aria-current="page" href="#">Science and technology</a>
        </li>
        <li className="nav-item pe-3">
          <a className="nav-link active " aria-current="page" href="#">Health and Sports</a>
        </li>
        <li className="nav-item pe-3">
          <a className="nav-link active" aria-current="page" href="#">Research Papers</a>
        </li>
        <li className="nav-item pe-3">
          <a className="nav-link active" aria-current="page" href="#">Politics</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
  )
}

export default Navbar