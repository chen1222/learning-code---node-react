import React from 'react';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('component did mount');
  }

  render() {
    const faceStyle = {
        backgroundImage: `url('img/face.jpg')`
    }

    return (
     <header>
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="/top"><img src="img/logo.png"/></a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

              <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    <span style={faceStyle} className="topbar-image"></span>
                    <span className="topbar-name">Shunsuke Takahashi</span>
                    <span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a href="/top">マイページ</a></li>
                    <li><a href="/account">アカウント情報</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="/logout-confirm">退会する</a></li>
                  </ul>
                </li>
              </ul>

            </div>
          </div>
        </nav>
      </header>

    );
  }
}

export default Header;
