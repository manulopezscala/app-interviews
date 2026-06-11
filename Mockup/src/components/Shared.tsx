import { Bell, Calendar, HelpCircle, LayoutDashboard, LogOut, Search, Settings, Users, Archive, BarChart3 } from 'lucide-react';
import { Button } from './ui/Button';

export function TopBar({ compact = false }: { compact?: boolean }) {
  return (
    <header className="topbar">
      <div className={compact ? 'logo small' : 'logo'}>InterviewConnect</div>
      {!compact && <nav style={{ display: 'flex', gap: 24, marginRight: 'auto', marginLeft: 36, color: '#5C5263', fontSize: 22 }}><span>Dashboard</span><span className="brand" style={{ borderBottom: '3px solid var(--brand)', paddingBottom: 10 }}>Interviews</span><span>Resources</span></nav>}
      <div className="icon-row"><Bell /><Settings /><div className="avatar" /></div>
    </header>
  );
}

export function SimpleHeader() {
  return <header className="topbar" style={{ justifyContent: 'flex-start' }}><div className="logo">InterviewConnect</div></header>;
}

export function SearchBox({ placeholder = 'Search...' }: { placeholder?: string }) {
  return <div className="searchbox"><Search size={22} /><span>{placeholder}</span></div>;
}

export function AdminShell({ active, children, top = true }: { active: 'dashboard' | 'candidates' | 'questions' | 'analytics'; children: React.ReactNode; top?: boolean }) {
  const items = [
    ['dashboard', LayoutDashboard, 'Dashboard'],
    ['candidates', Users, 'Candidates'],
    ['questions', Archive, 'Question Bank'],
    ['analytics', BarChart3, 'Analytics'],
  ] as const;
  return (
    <div className="admin-shell">
      <aside className="sidebar">
        <div className="sidebar-profile">
          <div className="avatar" />
          <h2 style={{ color: 'var(--brand-600)', margin: '16px 0 2px', fontSize: 28 }}>Admin Panel</h2>
          <div style={{ textTransform: 'uppercase', letterSpacing: '.08em', lineHeight: 1.35 }}>InterviewConnect<br />Pro</div>
        </div>
        <Button className="new"><span style={{ fontSize: 24 }}>+</span> New Interview</Button>
        {items.map(([key, Icon, label]) => <div key={key} className={`nav-item ${active === key ? 'active' : ''}`}><Icon size={24} />{label}</div>)}
        <div className="sidebar-bottom"><div className="nav-item"><HelpCircle size={24} />Support</div><div className="nav-item"><LogOut size={24} />Sign Out</div></div>
      </aside>
      <main className="admin-main">
        {top && <div className="admin-top"><div className="logo small">InterviewConnect</div><SearchBox /><div className="icon-row"><Bell /><Settings /><div className="avatar square" /></div></div>}
        {children}
      </main>
    </div>
  );
}

export function CandidateRow({ initials, name, email, area, level, status, tone }: { initials: string; name: string; email: string; area: string; level: string; status: string; tone: 'success' | 'warn' | 'error' }) {
  return <tr><td><div style={{ display: 'flex', gap: 16, alignItems: 'center' }}><div style={{ width: 40, height: 40, background: '#ECDEEF', border: '1px solid #D1C1D8', display: 'grid', placeItems: 'center', color: 'var(--brand-600)', fontWeight: 800 }}>{initials}</div><div><strong>{name}</strong><div className="mono" style={{ fontSize: 13 }}>{email}</div></div></div></td><td className="mono">2023-10-{status === 'Activa' ? '24' : status === 'Pendiente' ? '22' : '20'}</td><td>{area}<br /><span style={{ color: 'var(--muted)' }}>{level}</span></td><td><span className={`badge ${tone}`}>{status}</span></td><td><Calendar size={20} /></td></tr>;
}
