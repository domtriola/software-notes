# Inheritance
class Entity():
    physical_armor = 20
    magical_armor = 10
    vitality = 30

    def take_damage(self, damages):
        for damage_type, damage_amount in damages.items():
            armor = self._get_armor(damage_type)
            overflow = armor - damage_amount
            if overflow < 0:
                self._set_armor(damage_type, 0)
                self.vitality += overflow
            else:
                self._set_armor(damage_type, armor - damage_amount)

        return self.vitality

    def _get_armor(self, armor_type):
        return getattr(self, armor_type + '_armor')

    def _set_armor(self, armor_type, value):
        return setattr(self, armor_type + '_armor', value)

class Wizard():
    @staticmethod
    def attack(entity, damage):
        entity_health = entity.take_damage({
            'physical': 0,
            'magical': damage['magical_attack']
        })
        return entity_health

class Player():
    physical_attack = 5
    magical_attack = 10

    def __init__(self, class_type):
        self.class_type = class_type

    def become_class(self, class_type):
        self.class_type = class_type

    def attack(self, entity):
        return self.class_type.attack(entity, {
            'physical_attack': self.physical_attack,
            'magical_attack': self.magical_attack
        })

wizard = Player(Wizard)
monster = Entity()

print(wizard.attack(monster))
print(wizard.attack(monster))
print(wizard.attack(monster))
print(wizard.attack(monster))
print(wizard.attack(monster))
