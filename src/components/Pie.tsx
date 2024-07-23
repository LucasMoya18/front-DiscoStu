import './Pie.css'

function Pie() {
  return (
    <div className="foot container">
      <div className="row">
        <div className="col-12">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3 ">
            <li className="nav-item">
              <a
                href="https://www.instagram.com/lucasmoyx123/"
                className="nav-link px-2 text-black"
              >
                Instagram
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://www.facebook.com/"
                className="nav-link px-2 text-black"
              >
                Facebook
              </a>
            </li>
          </ul>
          <p className="text-center text-black">
            © 2024 Disco Stu's Dance Palace
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pie;
