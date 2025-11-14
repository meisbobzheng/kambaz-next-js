import { ReactNode } from "react";
import Session from "./Account/Session";
import KambazNavigation from "./Navigation";
import Providers from "./Providers";
import "./styles.css";

export default function KambazLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <Providers>
      <Session>
        <div id="wd-kambaz">
          <div className="d-flex">
            <div>
              <KambazNavigation />
            </div>
            <div className="wd-main-content-offset p-3 flex-fill">
              {children}
            </div>
          </div>
        </div>
      </Session>
    </Providers>
  );
}
