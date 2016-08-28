import React from 'react';

require('../../../../../sass/adsenseresponsivesidebarbottom.scss');

export default class AdsenseResponsiveSidebarBottom extends React.Component {

  componentDidMount() {
    (adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <div className="col-xs-12">
        <div className="adsense-responsive-sidebar-bottom-container">
          <ins class="adsbygoogle"
            style={{display:'block'}}
            data-ad-client="ca-pub-4988291228335260"
            data-ad-slot="1054522929"
            data-ad-format="auto">
          </ins>
        </div>
      </div>
    );
  }
}