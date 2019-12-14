import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 *
 * @param {object} props
 * @param {string} props.path
 * @param {import("@fortawesome/fontawesome-svg-core").IconName} props.icon
 * @param {string} props.title
 * @param {JSX.Element} [props.badge]
 * @param {boolean} [props.isDropdown]
 */
export default function whatever({ path, icon, title, badge, isDropdown }) {
  return (
      <>
    <Link href={path}>
        <div
          className="d-flex justify-content-between align-items-center px-4 py-2 list-item"
          style={{ height: "50px", cursor: "pointer" }}
        >
          <span className="icon_wrapper">
            <FontAwesomeIcon icon={icon} />
          </span>
          <span className="list-title">{title}</span>
          {badge}
          <span></span>
        </div>
          </Link>
      </>
  );
}
