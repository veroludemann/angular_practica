export class Profesional {

  id!:Number;
  name!: String;
  perfil!:String;
  photo!:String;
  githubLink!:String;
  linkedinLink!:String;

  constructor(id:number, name:string, perfil:string, photo:string, githubLink:string, linkedinLink:string)
  {
      this.id=id;
      this.name=name;
      this.perfil=perfil;
      this.photo=photo;
      this.githubLink=githubLink;
      this.linkedinLink=linkedinLink
  }
}
