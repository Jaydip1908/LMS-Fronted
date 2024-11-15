const { Label } = require("@radix-ui/react-label");
const { Input } = require("../input");
const {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} = require("@radix-ui/react-select");
const { Textarea } = require("../textarea");

function FormControls({ formControls = [], formData, setFormData }) {
  function renderComponentByType(getControlItem) {
    let element = null;
    switch (getControlItem.componentType) {
      case "input":
        element = (
          <Input
            id={getControlItem.name}
            name={getControlItem.name}
            type={getControlItem.type}
            placeholder={getControlItem.placeholder}
            value={formData[getControlItem.name] || ""}
            onChange={(e) =>
              setFormData({
                ...formData,
                [getControlItem.name]: e.target.value,
              })
            }
          />
        );
        break;
      case "select":
        element = (
          <Select
            id={getControlItem.name}
            name={getControlItem.name}
            type={getControlItem.type}
          >
            <SelectTrigger>
              <SelectValue placeholder={getControlItem.label} />
            </SelectTrigger>
            <SelectContent>
              {getControlItem.options && getControlItem.options.length > 0
                ? getControlItem.options.map((optionItem) => (
                    <SelectItem key={optionItem.id} value={optionItem.id}>
                      {optionItem.label}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
        );
        break;
      case "textarea":
        element = (
          <Textarea
            id={getControlItem.name}
            value={formData[getControlItem.name] || ""}
            onChange={(e) =>
              setFormData({
                ...formData,
                [getControlItem.name]: e.target.value,
              })
            }
          />
        );
        break;
      default:
        element = (
          <Input
            id={getControlItem.name}
            name={getControlItem.name}
            type={getControlItem.type}
          />
        );
    }
    return element;
  }

  return (
    <div className="flex flex-col gap-3">
      {formControls.map((getControlItem) => (
        <div key={getControlItem.name}>
          <Label htmlFor={getControlItem.name}>{getControlItem.label}</Label>
          {renderComponentByType(getControlItem)}
        </div>
      ))}
    </div>
  );
}
export default FormControls;
