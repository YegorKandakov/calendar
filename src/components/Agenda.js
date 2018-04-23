import React from 'react';
import '../css/Agenda.css';

class Agenda extends React.Component {
  state = {}

  render() {
    return (
      <table className="table"><tr>

<td className="leftCol">
<div>
<div className="time big">
  8:00
</div>
<div className="time small">
  8:30
</div>
</div>

<div>

<div className="time big" >
  9:00
</div>
<div className="time small">
  9:30
</div>

</div></td>

<td className="rightCol">

Events will be here
</td></tr></table>
    );
  }
}
export default Agenda;