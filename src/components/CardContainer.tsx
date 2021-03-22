import { bookmarkOutline } from 'ionicons/icons';
import { IonChip, IonIcon, IonLabel } from '@ionic/react';
import './CardContainer.css';

export interface INotice {
    title: string;
    writer: string;
    createdAt: number;
    dDay: number;
    category: string;
}

interface ContainerProps {
    notice: INotice
}

const CardContainer: React.FC<ContainerProps> = ({ notice }) => {
    return (
        <div className="cardContainer">
            <div className="cardTop">
                <div className="cardChip">
                    <IonChip outline>
                        <IonLabel>{notice.category}</IonLabel>
                    </IonChip>
                    <IonChip color="primary">
                        <IonLabel>D-{notice.dDay}</IonLabel>
                    </IonChip>
                </div>
                <IonIcon icon={bookmarkOutline} color="primary" />
            </div>
            <div className="cardBody">
                <p>{notice.title}</p>
            </div>
            <div className="cardBottom">
                <p>{notice.writer}</p>
                <p>15분 전</p>
            </div>
        </div>
    );
};

export default CardContainer;
