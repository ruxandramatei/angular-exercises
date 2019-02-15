import { Component, ViewChild } from "@angular/core";
import { PaAttrDirective } from "./app/ondemand/attr.directive";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from 'protractor';

@Component({
    template:`<div><span [pa-attr] = "className">Test Content</span></div>`
})
class TestComponent{
    className = "initialClass";
    @ViewChild(PaAttrDirective);
    attrDirective: PaAttrDirective;
}

describe("PaAttrDirective", () => {
    let fixture: ComponentFixture<TestComponent>;
    let directive: PaAttrDirective;
    let spanElement: HTMLSpanElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent, PaAttrDirective]
        })

        fixture = TestBed.createComponent(TestComponent);
        directive = fixture.componentInstance.attrDirective;
        spanElement = fixture.debugElement.query(By.css("span")).nativeElement;
    });

    it("generates the correct number of elements", () => {
        fixture.detectChanges();
        expect(directive.bgClass).toBe("initialClass");
        expect(spanElement.className).toBe("initialClass");

        fixture.componentInstance.className = "nextClass";
        fixture.detectChanges();
        expect(directive.bgClass).toBe("nextClass");
        expect(spanElement.className).toBe("nextClass");
    });
});