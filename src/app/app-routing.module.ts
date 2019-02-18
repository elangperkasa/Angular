import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeComponent } from  './me/me.component';
import { ContactComponent } from  './ui/contact/contact.component';
import { JourneyComponent } from  './ui/journey/journey.component';
const routes: Routes = [

{
path:  'contact',
component:  ContactComponent
}
,
{
path:  'journey',
component:  JourneyComponent
}
,
{
path:  '',
component:  MeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
