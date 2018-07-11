import React from 'react';
import { connect } from 'react-redux';
import { book } from 'actions';
import { Button } from 'cdesk';
import { set } from 'utils/action';
import { tap } from 'utils';
import { CheckBox } from 'form';

const Booking = ({status, book, setEther, ether, products}) =>
    <div>
        <form id="nameForm" style={{marginTop: '10px'}}>
            <input type="text" id="nameText" size="80" placeholder="Enter a name"/>
        </form>
        <CheckBox name="redeemPoints" title="Redeem points?"/>

        <Button onClick={() => book({ name: document.getElementById('nameText').value.trim(), sailingCode: products.SailingCode })}>Book</Button>
        <div>Status: {status}</div>
        <br/>
        <Button onClick={() => window.loyalty.instance.set(5, { from: window.loyalty.account })}>Set</Button>
        <Button onClick={() => window.loyalty.instance.get({ from: window.loyalty.account }).then(r => setEther(r))}>Get</Button>
        <span>{ether}</span>
    </div>;

export default connect(s => ({ status: (s.bookings || {}).status, ether: s.ether, products: (s.products || {}) }), { book, setEther: set('ether') })(Booking);
