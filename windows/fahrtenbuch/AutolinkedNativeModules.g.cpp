// AutolinkedNativeModules.g.cpp contents generated by "react-native autolink-windows"
// clang-format off
#include "pch.h"
#include "AutolinkedNativeModules.g.h"

// Includes from @react-native-community/checkbox
#include <winrt/CheckboxWindows.h>

// Includes from react-native-sqlite-storage
#include <winrt/SQLitePlugin.h>

namespace winrt::Microsoft::ReactNative
{

void RegisterAutolinkedNativeModulePackages(winrt::Windows::Foundation::Collections::IVector<winrt::Microsoft::ReactNative::IReactPackageProvider> const& packageProviders)
{ 
    // IReactPackageProviders from @react-native-community/checkbox
    packageProviders.Append(winrt::CheckboxWindows::ReactPackageProvider());
    // IReactPackageProviders from react-native-sqlite-storage
    packageProviders.Append(winrt::SQLitePlugin::ReactPackageProvider());
}

}
