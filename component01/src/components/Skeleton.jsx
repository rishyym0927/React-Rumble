import './Skeleton.css';

export default function Skeleton({ type }) {
  return <div className={`skeleton ${type}`}></div>;
}
