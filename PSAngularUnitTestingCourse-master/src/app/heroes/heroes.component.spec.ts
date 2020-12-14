import { of } from "rxjs";
import { HeroesComponent } from "./heroes.component"


describe("HeroesComponent", ()=>{
  let component : HeroesComponent;
  let HEROES;
  let mockHeroesService;

  beforeEach(()=>{
    HEROES = [
      {id: 1, name :"SpiderDude",strength:8},
      {id: 2, name :"Woderful Women",strength:24},
      {id: 3, name :"Superdude",strength:55}
    ]

    mockHeroesService = jasmine.createSpyObj(["getheroes","addHero","deleteHero"])
    component = new HeroesComponent(mockHeroesService);
  })

  describe("delete",()=>{

    it("should remove the indicated hero from heroes list",()=>{
      mockHeroesService.deleteHero.and.returnValue(of(true))
      component.heroes = HEROES;

      component.delete(HEROES[2])

      expect(component.heroes.length).toBe(2);

    })

    it ("should call deleteHero", ()=>{
      mockHeroesService.deleteHero.and.returnValue(of(true))
      component.heroes = HEROES;

      component.delete(HEROES[2])

      expect(mockHeroesService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
    })
  })
})
