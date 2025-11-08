import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Slider } from '../ui/slider';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { useAdmin } from '../../contexts/AdminContext';
import { toast } from 'sonner@2.0.3';

export function SkillsManager() {
  const { skillCategories, updateSkillCategories } = useAdmin();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingCategoryIndex, setEditingCategoryIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    color: 'from-blue-500 to-cyan-500',
    skills: [{ name: '', level: 50 }]
  });

  const colorOptions = [
    { value: 'from-blue-500 to-cyan-500', label: 'Синий → Голубой' },
    { value: 'from-green-500 to-emerald-500', label: 'Зеленый → Изумрудный' },
    { value: 'from-purple-500 to-pink-500', label: 'Фиолетовый → Розовый' },
    { value: 'from-orange-500 to-red-500', label: 'Оранжевый → Красный' },
    { value: 'from-yellow-500 to-orange-500', label: 'Желтый → Оранжевый' }
  ];

  const handleOpenDialog = (categoryIndex?: number) => {
    if (categoryIndex !== undefined) {
      setEditingCategoryIndex(categoryIndex);
      const category = skillCategories[categoryIndex];
      setFormData({
        title: category.title,
        color: category.color,
        skills: [...category.skills]
      });
    } else {
      setEditingCategoryIndex(null);
      setFormData({
        title: '',
        color: 'from-blue-500 to-cyan-500',
        skills: [{ name: '', level: 50 }]
      });
    }
    setIsDialogOpen(true);
  };

  const handleAddSkill = () => {
    setFormData({
      ...formData,
      skills: [...formData.skills, { name: '', level: 50 }]
    });
  };

  const handleRemoveSkill = (index: number) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((_, i) => i !== index)
    });
  };

  const handleSkillChange = (index: number, field: 'name' | 'level', value: string | number) => {
    const newSkills = [...formData.skills];
    newSkills[index] = { ...newSkills[index], [field]: value };
    setFormData({ ...formData, skills: newSkills });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newCategories = [...skillCategories];
    if (editingCategoryIndex !== null) {
      newCategories[editingCategoryIndex] = formData;
      toast.success('Категория обновлена!');
    } else {
      newCategories.push(formData);
      toast.success('Категория добавлена!');
    }

    updateSkillCategories(newCategories);
    setIsDialogOpen(false);
  };

  const handleDeleteCategory = (index: number) => {
    if (confirm('Вы уверены, что хотите удалить эту категорию?')) {
      const newCategories = skillCategories.filter((_, i) => i !== index);
      updateSkillCategories(newCategories);
      toast.success('Категория удалена');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-900 dark:text-white mb-2">Управление навыками</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Редактируйте категории навыков и их уровни
          </p>
        </div>
        <Button
          onClick={() => handleOpenDialog()}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          Добавить категорию
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, categoryIndex) => (
          <Card key={categoryIndex}>
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className={`inline-block px-4 py-2 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                  {category.title}
                </div>
                <div className="flex gap-2">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8"
                    onClick={() => handleOpenDialog(categoryIndex)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8 text-red-600 hover:text-red-700"
                    onClick={() => handleDeleteCategory(categoryIndex)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingCategoryIndex !== null ? 'Редактировать категорию' : 'Добавить категорию'}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Название категории</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="color">Цветовая схема</Label>
              <select
                id="color"
                value={formData.color}
                onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              >
                {colorOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Навыки</Label>
                <Button type="button" size="sm" onClick={handleAddSkill}>
                  <Plus className="w-4 h-4 mr-1" />
                  Добавить навык
                </Button>
              </div>

              {formData.skills.map((skill, index) => (
                <Card key={index} className="p-4">
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Название навыка"
                        value={skill.name}
                        onChange={(e) => handleSkillChange(index, 'name', e.target.value)}
                        required
                      />
                      {formData.skills.length > 1 && (
                        <Button
                          type="button"
                          size="icon"
                          variant="destructive"
                          onClick={() => handleRemoveSkill(index)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label>Уровень: {skill.level}%</Label>
                      </div>
                      <Slider
                        value={[skill.level]}
                        onValueChange={([value]) => handleSkillChange(index, 'level', value)}
                        max={100}
                        step={5}
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1">
                {editingCategoryIndex !== null ? 'Сохранить изменения' : 'Добавить категорию'}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsDialogOpen(false)}
              >
                Отмена
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
