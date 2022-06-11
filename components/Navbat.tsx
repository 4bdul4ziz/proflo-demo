// NavbarItem.tsx
import { Icon, Menu } from 'antd';
import cuid from 'cuid';
import * as React from 'react';
import { Link } from 'react-router-dom';

interface INavbarItemProps {
  readonly route: string;
  readonly iconType: string;
  readonly name: string;
}
const NavbarItem: React.SFC<INavbarItemProps> = (props) => (
  <Menu.Item key={cuid()}>
    <Link to={`/${props.route}`}>
      <Icon type={props.iconType} /> { name }
    </Link>
  </Menu.Item>
);

export default NavbarItem;

// Navbar.tsx
import { Icon, Menu } from 'antd';
import { ClickParam } from 'antd/lib/menu';
import * as R from 'ramda';
import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dispatch, IRootState } from 'store/types';
import NavbarItem from './Navbar-item';
import './Navbar.css';

interface IRoutesInfo {
    route: string;
    iconType: string;
    name: string;
}
interface INavbarProps {}
interface INavbarState {
  current: string;
  routes: IRoutesInfo[];
}
const SubMenu = Menu.SubMenu;

class Navbar extends React.Component<IConnectedProps, INavbarState> {
  constructor() {
    super();
    this.state = {
      current: '',
      routes: [
        {
          iconType: 'home',
          name: 'Home',
          route: '',
        },
        {
          iconType: 'appstore',
          name: 'Store',
          route: 'store',

        },
        {
          iconType: 'store',
          name: 'Photos',
          route: 'photos',
        },
        {
          iconType: '',
          name: 'Tour',
          route: 'tour',
        },
        {
          iconType: 'book',
          name: 'Blog',
          route: 'blog',
        },
      ],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  public render(): JSX.Element {
    const { routes } = this.state;
    return (
    <div className="nav-style">
      <Menu
        onClick={ this.handleClick }
        selectedKeys={[ this.state.current ]}
        mode="horizontal"
        theme="light"
      >
        { R.map(({ name, iconType, route = '' }: IRoutesInfo): JSX.Element => (
          <div className="nav-items">
            <NavbarItem name={ name } route={ route } iconType={ iconType } />
          </div>
          ), routes)
        }
        {
        <SubMenu  key="sub3" title="Login/Register">
        <div className="nav-items">
            <Link to={`/login`}>
                <Icon type="login" />
                <Menu.Item><h1>Login</h1> </Menu.Item>
            </Link>
          </div>
          <hr />
          <div>
          <Link to={`/signup`}>
            <Icon type="user-add" />
            <Menu.Item><h1>Signup</h1></Menu.Item>
          </Link>
        </div>
        </SubMenu>
        }
      </Menu>
      </div>
    );
  }
  private handleClick(e: ClickParam): void {
      this.setState({
        current: e.key,
      });
    }
}

export function selector(state: IRootState): IConnectedState {
  return {
    history: R.prop('history', state),
    location: R.prop('location', state),
    match: R.prop('match', state),
  };
}
interface IConnectedState {
  history: any;
  location: any;
  match: any;
}
function mapStateToProps(state: IRootState): IConnectedState {
  return selector(state);
}

interface IConnectedDispatch {}
function mapDispatchToProps(dispatch: Dispatch): IConnectedDispatch {
  return {};
}

interface IConnectedProps extends IConnectedState, INavbarProps, IConnectedDispatch {}
const ConnectedNavbar = connect(
    mapStateToProps, mapDispatchToProps,
)(Navbar);

export default ConnectedNavbar;