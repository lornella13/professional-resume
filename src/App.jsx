import { profile as p } from "./data.js";

function SideSection({ title, children }) {
  return (
    <section className="side-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default function App() {
  const { contact, experience, projects } = p;

  return (
    <div className="cv">
      <aside className="sidebar">
        <div className="photo-wrap">
          <img src={p.photo} alt={p.name} />
        </div>

        <SideSection title="Contact">
          <ul className="plain">
            <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
            {contact.links.map((l) => (
              <li key={l.label}><a href={l.href} target="_blank" rel="noreferrer">{l.label}</a></li>
            ))}
            <li>{contact.phone} · {contact.location}</li>
          </ul>
        </SideSection>

        <SideSection title="About Me"><p>{p.about}</p></SideSection>
        <SideSection title="Education"><p>{p.education}</p></SideSection>

        <SideSection title="Skills">
          <ul className="skills">
            {p.skills.map(([k, v]) => (
              <li key={k}><strong>{k}:</strong> {v}</li>
            ))}
          </ul>
        </SideSection>

        <SideSection title="References">
          <ul className="plain refs">
            {p.references.map((r) => (
              <li key={r.name}>
                {r.name} · {r.role}
                <br />
                <a href={`mailto:${r.email}`}>{r.email}</a>
              </li>
            ))}
          </ul>
        </SideSection>
      </aside>

      <main className="main">
        <header>
          <h1>{p.name}</h1>
          <p className="title">{p.title}</p>
        </header>

        <section>
          <h2 className="main-h">Work Experience</h2>
          <div className="job-head">
            <strong>{experience.role}</strong> <span className="dates">{experience.dates}</span>
          </div>
          <div className="org">{experience.org}</div>
          <ul className="bullets">
            {experience.bullets.map((b) => <li key={b}>{b}</li>)}
          </ul>
        </section>

        <section>
          <h2 className="main-h">Projects</h2>
          {projects.map((pr) => (
            <article className="project" key={pr.name}>
              <div className="job-head">
                <strong>{pr.name}</strong> <span className="stack">({pr.stack})</span>
              </div>
              {pr.summary && <p className="summary">{pr.summary}</p>}
              <ul className="bullets">
                {pr.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
