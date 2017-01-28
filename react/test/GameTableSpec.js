import GameTable from '../src/GameTable.js'

describe('GameTable', () => {
  let table,
      turn,
      selectCell,
      wrapper;

  table = {
    row1: { cell1: '', cell2: '', cell3: '' },
    row2: { cell1: '', cell2: '', cell3: '' },
    row3: { cell1: '', cell2: '', cell3: '' }
  };
  // write (shallow) tests here for the GameTable stateless Component and don't
  // forget to remove pending()
  beforeEach(() => {
    jasmineEnzyme();
    // add set up data as needed here
    // create a variable assigned to your shallow rendered component
    selectCell = () => {};
    wrapper = shallow(
      <GameTable
        table = {table}
        turn = 'X'
        selectCell={selectCell}
      />
    );
  });

  it('should have the specified inital state', () => {
    expect(wrapper.find('table')).toBePresent();
  });

  it('should render an p tag containing a message with the current turn', () => {
    expect(wrapper.find('p').text()).toBe("X's turn to go!")
  });

  it('should render a table with three rows (<tr>)', () => {
    expect(wrapper.find('tr').length).toEqual(3);
  });

  it('should render first row with three columns (<td>)', () => {
    expect(wrapper.find('tr').first().find('td').length).toEqual(3);
  });
});
