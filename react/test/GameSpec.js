import { shallow, mount } from 'enzyme';
import Game from '../src/Game.js';
import GameTable from '../src/GameTable.js';

describe('Game', () => {
  // write non shallow (mount) tests here to test the Game Component with the
  // full DOM and don't forget to remove pending()
  let wrapper;
  let selectCell;
  let selectedCell;

  let table = {
    row1: { cell1: '', cell2: '', cell3: '' },
    row2: { cell1: '', cell2: '', cell3: '' },
    row3: { cell1: '', cell2: '', cell3: '' }
  };
  let turn = 'X';

  beforeEach(() => {
    jasmineEnzyme();
    spyOn(Game.prototype, 'selectCell').and.callThrough();
    wrapper = mount(<Game />);
  });

  it('should have the specified inital state', () => {
    expect(wrapper.state()).toEqual({ table: table, turn: turn });
  });

  it('should render an h3 (<h3>) with the title of the page', () => {
    expect(wrapper.find('h3').text()).toBe("Tic Tac Toe");
  });

  it('should render the GameTable', () => {
    expect(wrapper.find(GameTable)).toBePresent();
  });

  it('should render an X when a cell is clicked during X\'s turn', () => {
    selectedCell = wrapper.find('tr').first().find('td').first();
    expect(selectedCell.text()).toEqual('');
    selectedCell.simulate('click');
    expect(Game.prototype.selectCell).toHaveBeenCalled();

    expect(selectedCell.text()).toEqual('X');
  });

  it("should update who's turn it is when a cell is clicked during X\'s turn", () => {
    selectedCell = wrapper.find('tr').first().find('td').first();
    expect(selectedCell.text()).toEqual('');
    selectedCell.simulate('click');

    expect(wrapper.find('p').text()).toBe("O's turn to go!");
  });
});
