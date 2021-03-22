import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './Tab1.css';
import CardContainer, { INotice } from '../components/CardContainer';

const exampleNotice = [
  {
    title: '[학사] 2021-1학기 학부 중간수업평가 시행 안내',
    writer: '학사팀',
    createdAt: 12345,
    dDay: 1,
    category: '학사',
  },
  {
    title: '[공지] [보건의료센터]체성분측정(인바디) 검사 재개 안내',
    writer: '보건의료센터',
    createdAt: 12345,
    dDay: 2,
    category: '공지',
  },
  {
    title: '[장학] 21-1 중소기업 취업연계(희망사다리1유형) 장학사업 신청 연장 안내',
    writer: '학생지원센터',
    createdAt: 12345,
    dDay: 3,
    category: '장학',
  },
  {
    title: '[공지] [비대위] 2021 해오름제 - 2주차 이벤트 & 상설 이벤트',
    writer: '53대비상대책위원회',
    createdAt: 12345,
    dDay: 4,
    category: '공지',
  },
  {
    title: '[공지] [졸준위] 학기 중 근무시간 및 졸업물품 보관기간 안내',
    writer: '졸업준비위원회',
    createdAt: 12345,
    dDay: 5,
    category: '공지',
  }
]

const noticeList = exampleNotice.map((item: INotice) => {
  return <CardContainer notice={item} />
})

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>전체 피드</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">전체 피드</IonTitle>
          </IonToolbar>
        </IonHeader>
        {noticeList}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
