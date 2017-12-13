// TODO

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gotten: false,
      hover: false
    };
  }

  onListItemClick() {
    this.setState({
      gotten: !this.state.gotten
    });
  }

  onListItemHover() {
    this.setState({
      hover: !this.state.hover
    });
  }

  render() {
    var style = {
      textDecoration: this.state.gotten ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };

    return (
      <li style={style}
        onClick={this.onListItemClick.bind(this)}
        onMouseEnter={this.onListItemHover.bind(this)}
        onMouseLeave={this.onListItemHover.bind(this)}>
        {this.props.list}
      </li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.list.map(list =>
      <GroceryListItem list={list} />
    )}
  </ul>
);

var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList list={['Shampoo', 'Conditioner']}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
