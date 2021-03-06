import { Component, OnInit, Input } from '@angular/core';
import { Router }           from '@angular/router';
import {ROUTER_DIRECTIVES} from '@angular/router';

import { LeverancierService } from './leverancier.service';
import { ArtikelService }        from './artikel.service';
import {Leverancier} from './leverancier';
import {Artikel} from './artikel';

import {TranslationComponent} from './translation.component';

//import {AutoComplete} from 'primeng/primeng';
//import {DataTable} from 'primeng/primeng';
//import {Column} from 'primeng/primeng';
//import {Panel} from 'primeng/primeng';
//import {Button} from 'primeng/primeng';
//import {InputText} from 'primeng/primeng';

@Component({
    selector: 'prov-leverancier',
    templateUrl: 'app/leverancier.component.html'//,
    //directives: [AutoComplete, DataTable, Column, Panel, Button, InputText, ROUTER_DIRECTIVES, TranslationComponent]
})

export class LeveranciersComponent {
    leverancier: Leverancier;
    results: Leverancier[];
    selected: boolean = false;
    collapsed: boolean = true;
    selectedArtikel: Artikel;
    resultArtikel: Artikel[];
    artikelSelected: boolean = false;
    editValues: boolean = false;
    addArtikels: boolean = false;

    constructor(
        private router: Router,
        private leverancierService: LeverancierService,
        private artikelService: ArtikelService) { }

    search(event) {
        this.selected = false;
        this.collapsed = true;
        this.leverancierService.getLeveranciersByQuery(event.query)
            .then(leveranciers => this.results = leveranciers);
    }

    searchArtikel(event) {
        this.artikelService.getArtikelsByQuery(event.query)
            .then(artikels => this.resultArtikel = artikels);
    }

    handleDropdown(event) {
        this.leverancierService.getLeveranciersByQuery(event.query)
            .then(leveranciers => this.results = leveranciers);
    }

    handleArtikelDropdown(event) {
        this.artikelService.getArtikelsByQuery(event.query)
            .then(artikels => this.resultArtikel = artikels);
    }

    itemSelected() {
        this.selected = true;
    }

    artikelsSelected() {
        let id = this.leverancier.id;

        this.leverancierService.addArtikel(id, this.selectedArtikel);
    }

    toggle(event) {
        this.loadArtikelLevs();
    }

    toggleEdit() {
        if (this.editValues) {
            this.editValues = false;
        } else {
            this.editValues = true;
        }
    }

    toggleAddArtikels() {
        this.addArtikels = true;
    }

    private loadArtikelLevs() {
        this.artikelService.getArtikelsByLevId(this.leverancier.id).then(artikels => {
            this.leverancier.artikels = artikels;

            console.log(artikels);

            this.leverancier.artikels.forEach(a => {
                this.artikelService.getLeveranciersByArtikelId(a.id).then(lev => {
                    a.leveranciers = lev;
                });
            });
        });
    }

}