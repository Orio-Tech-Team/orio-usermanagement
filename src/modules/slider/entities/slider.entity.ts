import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { GenericEntity } from 'src/generic/generic.entity';
import { ColumnMetadata } from "typeorm/metadata/ColumnMetadata";
import { Application } from "src/modules/application/entities/application.entity";

@Entity('sliders')
export class Slider extends GenericEntity{

    @Column({nullable:false})
    tile : string

    @Column({nullable:false})
    image : string

    @ManyToOne(() => Application, (application) => application.slider , {nullable:false , onDelete:"CASCADE" , onUpdate:"CASCADE"})
    @JoinColumn({name : "application_id"})
    application: Application;


}