const profile = {
  company: "Siddhi Engineers",
  subtitle: "Engineers & Building Contractor",
  address:
    "10, Shubh Sukan Apartment, Vitthal Patel Colony, Opp. Lakhudi Talavdi, Naranpura, Ahmedabad - 14",
  contact: "Mobile: 99252 04818 | Email: panchalprashant99@yahoo.in",
};

const projects = [
  { no: 1, site: "Shalimar Flats (Shalimar Bungalows Near Shahibaug Under Bridge)", work: "4 Blocks (Low-rise)", developer: "Dr. Ambalal Patel", duration: "1996-97" },
  { no: 2, site: "Aaknxa Apartment, Near Sola Railway Crossing, Sola Road", work: "1 Block (Low-rise)", developer: "Aakar Corporation", duration: "1998" },
  { no: 3, site: "Shankhnad Apartment, Opp. Torrent Power, Naranpura", work: "1 Block (Low-rise)", developer: "Krishna Developers", duration: "1998-99" },
  { no: 4, site: "Radhe Apartment, Opp. Asopalav Bungalows, Bhaikaka Nagar, Thaltej", work: "11 Blocks (Low-rise RCC + Masonry)", developer: "Kamdhenu Developers", duration: "1999-01, 2003" },
  { no: 5, site: "Karai Police Academy, Karai, Near Nana Chiloda", work: "2 Blocks (Low-rise)", developer: "Ashish Construction", duration: "2004" },
  { no: 6, site: "Shivalik Plaza, Panjra Pole, Ambawadi", work: "2 Blocks (Low-rise)", developer: "S. N. Developers", duration: "2004-05" },
  { no: 7, site: "Madhav Residency, Shereton Complex, Opp. Ketav Petrol Pump, Ambawadi", work: "2 Blocks (Low-rise)", developer: "Giriraj Associates", duration: "2005-06" },
  { no: 8, site: "Angi Apartment, B/h. Vardan Tower, Shastrinagar, Naranpura", work: "1 Block (Low-rise)", developer: "Angi Developers", duration: "2006-07" },
  { no: 9, site: "Astha Apartment, Ghatlodia", work: "1 Block (Low-rise)", developer: "Astha Developers", duration: "2006-07" },
  { no: 10, site: "Shukan Mall, Near Rajasthan Hospital, Shahibaug", work: "1 Block (Low-rise)", developer: "Shukan Developers", duration: "2006-07" },
  { no: 11, site: "Gulmohar Foliage, B/h. C. N. Vidyalaya, Nr. Reliance Petrol Pump", work: "1 Block (Low-rise)", developer: "Trilokesh Developers", duration: "2007-08" },
  { no: 12, site: "Shalin Apartment, B/h. Sachin Tower, Shyamal Cross Road", work: "1 Block (Low-rise)", developer: "Shalin Developers", duration: "2007-08" },
  { no: 13, site: "Mallinath Apartment, Near Ambedkar Bridge, Vasana", work: "3 Blocks (Low-rise, all labour)", developer: "Mallinath Developers", duration: "2008-09" },
  { no: 14, site: "P. N. House, Near Prabhudas Thakkar College, Paldi", work: "1 Block (Low-rise)", developer: "Komal Developers", duration: "2008-09" },
  { no: 15, site: "Angi-I Apartment, Near General Co-Op Bank, Naranpura Crossing", work: "1 Block (Low-rise)", developer: "Angi Developers", duration: "2009-10" },
  { no: 16, site: "Riverside Park Phase-I, Vasna", work: "2 High-rises", developer: "Trilokesh Developers", duration: "2009-10" },
  { no: 17, site: "Riverside Park Phase-II, Vasna", work: "2 High-rises", developer: "Trilokesh Developers", duration: "2010-11" },
  { no: 18, site: "Swaminarayan Park-II, Vasna", work: "3 High-rises", developer: "Dhamdev Infrastructure", duration: "2012-13" },
  { no: 19, site: "Gulmohar Auris, Ambawadi", work: "1 Low-rise", developer: "Trilokesh Developers", duration: "2013-14" },
  { no: 20, site: "Malabar County, Vaishnadevi Circle (With Material)", work: "C.O.P. & Banquet Hall", developer: "Ganesh Housing Developers", duration: "2014-15" },
  { no: 21, site: "Dev Aurum, And Nagar", work: "1 High-rise", developer: "Dev Corporation", duration: "2016-17" },
  { no: 22, site: "Abaj Electronics, Vadu, Ghumasan Road (Industrial, with material)", work: "P.E.B. Structure", developer: "-", duration: "2017-18" },
  { no: 23, site: "Anand Ilyf, Tragad", work: "2 High-rises", developer: "Anand Developers", duration: "2019-20" },
];

const totalProjects = projects.length;
const lowRiseCount = projects.filter((p) => p.work.toLowerCase().includes("low-rise")).length;
const highRiseCount = projects.filter((p) => p.work.toLowerCase().includes("high-rise")).length;

export default function HomePage() {
  return (
    <main className="container">
      <section className="hero card">
        <p className="eyebrow">Work Profile</p>
        <h1>{profile.company}</h1>
        <p className="subtitle">{profile.subtitle}</p>
        <p>{profile.address}</p>
        <p>{profile.contact}</p>
      </section>

      <section className="stats">
        <article className="card stat"><h2>{totalProjects}</h2><p>Total Projects</p></article>
        <article className="card stat"><h2>{lowRiseCount}</h2><p>Low-rise Projects</p></article>
        <article className="card stat"><h2>{highRiseCount}</h2><p>High-rise Projects</p></article>
      </section>

      <section className="card tableWrap">
        <div className="tableHeader">
          <h2>Project Timeline</h2>
          <p className="tableNote">Structured from the original work profile document.</p>
        </div>

        <div className="tableScroll">
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Site Name</th>
                <th>Work Done</th>
                <th>Developer</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.no}>
                  <td>{project.no}</td>
                  <td>{project.site}</td>
                  <td>{project.work}</td>
                  <td>{project.developer}</td>
                  <td>{project.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
