import React from 'react';

require('../../../sass/footer.scss');

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <footer className="container-fluid">
          <div className="row">
            <div className="col-xs-12">              
              <h5>Copyright &copy; 2016 LottoMaxStats.com</h5>
              <div className="disclaimer">LottoMaxStats.com is in no way affiliated with the <a className="link" target="_blank" href="https://www.alc.ca/">Atlantic Lottery Corporation</a>, <a className="link" target="_blank" href="http://lotoquebec.com/portail/en">Loto-Québec</a>, <a className="link" target="_blank" href="http://www.olg.ca/index.jsp?lang=en">Ontario Lottery and Gaming Corporation</a>, <a className="link" target="_blank" href="https://www.wclc.com/home.htm">Western Canada Lottery Corporation</a>, or the <a className="link" target="_blank" href="http://www.bclc.com/">British Columbia Lottery Corporation</a>.</div>
              <div className="disclaimer">This site was built with <a className="link" target="_blank" href="https://facebook.github.io/react/index.html">React.js</a> and Facebook&#39;s <a className="link" target="_blank" href="https://facebook.github.io/flux/">Flux</a> architecture. The data used to populate the widgets on this site comes from a painstakingly created 80,000+ line JSON file.</div>              
            </div>
          </div>
        </footer>        
      </div>
    );
  }
}