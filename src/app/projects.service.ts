import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/compat/firestore';
import { Project } from './shared/projects';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService implements OnInit {

  constructor(private firestore: AngularFirestore) {

  }

  ngOnInit(): void {

  }

  getAllProjects(): Project[] {

    let projects = new Array<Project>();
    this.firestore.collection("projects", ref => ref.orderBy('id'))
    .stateChanges()
      .subscribe(
        projectsFromFB =>
          projectsFromFB
          .forEach(proj => projects.push(
            this.createProjectFromFirebaseItem(proj as DocumentChangeAction<Project>)
          ))
      );
    // var project1 = new Project();
    // project1.from = "2020-09-01";
    // project1.name ="Entwicklung etwas tolles";
    // project1.technologies="Angular, Firebase, Firestore";
    // project1.subProjects = [{project: "Projekt 1"}, {project: "Projekt 2"}];
    // project1.isExpanded = true;
    // project1.company = "BestSEcret";
    // project1.shortDesc = "Entwicklung einer Webanwendung";
    // project1.id = 1;

    // var project2 = new Project();
    // project2.company = "Interflex";
    // project2.from = "2018-09-01";
    // project2.name ="Ein anderer Name";
    // project2.technologies="ASP.NET, C#, SQL Server";
    // project2.subProjects = [{project: "Projekt 1"}, {project: "Projekt 2"}];
    // project2.shortDesc = "Entwicklung eines SChliesssystems";
    // project2.to = "2020-08-31";
    // project2.id = 2;

    // projects.push(project2, project1);
    return projects.reverse();
  }

  private createProjectFromFirebaseItem(input: DocumentChangeAction<Project>): Project {
    let newProject = new Project();
    newProject.id = input.payload.doc.data().id;
    newProject.name = input.payload.doc.data().name;
    newProject.company = input.payload.doc.data().company;
    newProject.shortDesc = input.payload.doc.data().shortDesc;
    newProject.technologies = input.payload.doc.data().technologies;
    newProject.isExpanded = newProject.id === 1 ? true : false;
    newProject.from = input.payload.doc.data().from;
    newProject.to = input.payload.doc.data().to;
    newProject.subProjects = input.payload.doc.data().subProjects;
    console.log(newProject);
    return newProject;

  }

}
