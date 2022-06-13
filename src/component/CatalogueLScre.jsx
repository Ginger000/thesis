function CatalogueLScre() {
    return (
        <div className="catalogue-LargeScreen">
            <div className="catalogue">
                <h3>
                    <a href="#" className="catalogue-logo">
                        CATALOGUE
                        <span className="arrow"></span>
                    </a>
                </h3>
            </div>
            <ul className="menu">
                <li>
                    <a href="#" className="menu-link">
                        Web-Home
                    </a>
                </li>

                <li>
                    <a href="#" className="menu-link">
                        Introduction
                    </a>
                </li>
                <li className="has-dropdown">
                    <a href="#" className="menu-link">
                        Theory
                    </a>
                    <ul className="submenu">
                        <li>
                            <a href="#" className="menu-link">
                                Analogy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="menu-link">
                                System
                            </a>
                        </li>
                        <li>
                            <a href="#" className="menu-link">
                                Physics
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="has-dropdown">
                    <a href="#" className="menu-link">
                        Practice
                    </a>
                    <ul className="submenu">
                        <li>
                            <a href="#" className="menu-link">
                                Demo-1
                            </a>
                        </li>
                        <li>
                            <a href="#" className="menu-link">
                                Demo-2
                            </a>
                        </li>
                        <li>
                            <a href="#" className="menu-link">
                                Demo-3
                            </a>
                        </li>
                        <li>
                            <a href="#" className="menu-link">
                                Travel
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#" className="menu-link">
                        Future Industry
                    </a>
                </li>
                <li>
                    <a href="#" className="menu-link">
                        Thanks
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default CatalogueLScre;
