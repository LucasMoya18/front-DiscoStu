import './Pie.css'

function Pie() {
  return (
    <div className="foot container">
      <div className="row">
        <div className="col-12">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3 ">
            <li className="nav-item li-foot">
              <a
                href="https://www.instagram.com/lucasmoyx123/"
                className="nav-link px-2 text-white"
              >
                Instagram
              </a>
            </li>
            <li className="nav-item li-foot">
              <a
                href="https://fb.watch/tvPG_oFGU6/"
                className="nav-link px-2 text-white"
              >
                Facebook
              </a>
            </li>
          </ul>
          <p className="text-center text-white p-foot">
            © 2024 Disco Stu's Dance Palace
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pie;
