import { Component, OnInit } from '@angular/core';
import { PlayerConfig } from 'projects/sunbird-pdf-player/src/lib/playerInterfaces';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sunbird-pdf-player-app';
  config: any = JSON.parse(localStorage.getItem('config')) || {}
  pdfMetadataEvents: object;
  pdfPlayerConfig: PlayerConfig = {
    context: {
      mode: 'play',
      authToken: '',
      sid: '7283cf2e-d215-9944-b0c5-269489c6fa56',
      did: '3c0a3724311fe944dec5df559cc4e006',
      uid: 'anonymous',
      channel: '505c7c48ac6dc1edc9b08f21db5a571d',
      pdata: { id: 'prod.diksha.portal', ver: '3.2.12', pid: 'sunbird-portal.contentplayer' },
      contextRollup: { l1: '505c7c48ac6dc1edc9b08f21db5a571d' },
      tags: [
        ''
      ],
      cdata: [],
      timeDiff: 0,
      objectRollup: {},
      host: '',
      endpoint: '',
      userData: {
        firstName: 'Harish Kumar',
        lastName: 'Gangula'
      },
      // if the dispatcher is provided then player won't send the event to backend container need to send it
      dispatcher: {
        dispatch: function (event) {
          console.log(`Events from dispatcher: ${JSON.stringify(event)}`)
        }
      }
    },
    config: this.config,
    // tslint:disable-next-line:max-line-length
    metadata: { "compatibilityLevel": 4, "copyright": "Tamilnadu", "keywords": ["b301epdf", "b302epdf", "epdf", "1epdft1"], "subject": ["Tamil"], "channel": "01235953109336064029450", "language": ["English"], "mimeType": "application/pdf", "objectType": "Content", "gradeLevel": ["Class 1"], "appIcon": "https://ntpproductionall.blob.core.windows.net/ntp-content-production/content/do_31291455031832576019477/artifact/3_1535000262441.thumb.png", "primaryCategory": "Teacher Resource", "artifactUrl": "https://ntpproductionall.blob.core.windows.net/ntp-content-production/content/assets/do_31291455031832576019477/b301b302_std_1_tamilenglish_lang_term-1_opt.pdf", "contentType": "FocusSpot", "identifier": "do_31291455031832576019477", "audience": ["Teacher"], "visibility": "Default", "mediaType": "content", "osId": "org.ekstep.quiz.app", "languageCode": ["en"], "license": "CC BY 4.0", "name": "B301,B302_STD_1_TAMIL,ENGLISH_LANG_TERM 1_OPT", "status": "Live", "code": "43e68089-997e-49a4-902a-6262e5654515", "description": "epdf", "streamingUrl": "https://ntpproductionall.blob.core.windows.net/ntp-content-production/content/assets/do_31291455031832576019477/b301b302_std_1_tamilenglish_lang_term-1_opt.pdf", "medium": ["Tamil"], "createdOn": "2019-12-16T07:59:53.154+0000", "copyrightYear": 2019, "additionalCategories": ["Focus Spot"], "lastUpdatedOn": "2019-12-16T11:52:56.405+0000", "creator": "SCERT 2 ECONTENTS", "pkgVersion": 1, "versionKey": "1576497176405", "framework": "tn_k-12_5", "createdBy": "f4f80b17-8609-44b9-b781-b79df5cf7e8d", "board": "State (Tamil Nadu)", "resourceType": "Read", "licenseDetails": { "name": "CC BY 4.0", "url": "https://creativecommons.org/licenses/by/4.0/legalcode", "description": "For details see below:" } },
    data: {}
  };

  ngOnInit(): void {
  }



  pdfEventHandler(event) {

    console.log(JSON.stringify(event));
    this.pdfMetadataEvents = event;
    if (event.eid === 'END') {
      this.config.startFromPage = event.metaData.pagesVisited[event.metaData.pagesVisited.length - 1];
      this.config.zoom = event.metaData.zoom[event.metaData.zoom.length - 1];
      this.config.rotation = event.metaData.rotation[event.metaData.rotation.length - 1];
      localStorage.setItem('config', JSON.stringify(this.config));
    }
  }
  telemetryEvent(event) {
    console.log('in app: ', JSON.stringify(event));
  }

}
