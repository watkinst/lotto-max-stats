import React from 'react';

require('../../../../../sass/adsenseresponsivesidebartop.scss');

export default class AdsenseResponsiveSidebarTop extends React.Component {

  componentDidMount() {
    (adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <div className="col-xs-12">
        <div className="adsense-responsive-sidebar-top-container">
          <ins class="adsbygoogle"
            style={{display:'block'}}
            data-ad-client="ca-pub-4988291228335260"
            data-ad-slot="5769414129"
            data-ad-format="auto">
          </ins>
        </div>
      </div>
    );
  }
}