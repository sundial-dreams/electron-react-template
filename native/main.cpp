#include <node_api.h>
#include <napi.h>
using namespace Napi;

Number Add(const CallbackInfo& info) {
    Number a = info[0].As<Number>();
    Number b = info[1].As<Number>();
    double r = a.DoubleValue() + b.DoubleValue();
    return Number::New(info.Env(), r);
}

Object Init(Env env, Object exports) {
    exports.Set("add", Function::New(env, Add));
    return exports;
}

NODE_API_MODULE(addon, Init)